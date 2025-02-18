import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import useParticipants from "../../../hooks/useParticipants";
import Swal from "sweetalert2";

const CheckOutForm = () => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { participants } = useParticipants();  // Destructuring the participants array

  // Retrieve totalPrice from the state
  const { totalPrice } = location.state || { totalPrice: 0 };

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post('/create-payment-intent', { price: totalPrice })
        .then(res => {
          console.log('Client Secret:', res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch(err => console.error('Error creating payment intent:', err));
    }
  }, [totalPrice, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('Payment Error:', error);
      setError(error.message);
    } else {
      console.log('Payment Method:', paymentMethod);
      setError('');
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          email: user.email,
          name: user.name,
        },
      },
    });

    if (confirmError) {
      console.log('Confirm Error:', confirmError);
      setError(confirmError.message);
    } else {
      console.log('Payment Intent:', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // Find the participant for this email
        const participant = participants.find(item => item.participantEmail === user.email);
        
        if (!participant) {
          Swal.fire({
            title: 'Error!',
            text: 'Participant not found.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
          return;
        }

        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          participantId: participant._id,  // Correctly finding participantId
          campId: participant.campId,  // Correctly finding campId
          status: 'pending',
        };

        try {
          const res = await axiosSecure.post('/payments', payment);
          console.log('payment saved', res.data);
          
          // After payment, you may want to update participant status or delete if necessary
          // You should consider handling participant deletion separately on the backend
          Swal.fire({
            title: 'Payment Successful!',
            text: `Your transaction ID is ${paymentIntent.id}`,
            icon: 'success',
            confirmButtonText: 'OK'
          });
        } catch (err) {
          console.error('Payment saving error:', err);
          Swal.fire({
            title: 'Error!',
            text: 'There was an issue saving your payment.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      }
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Total Fees: ${totalPrice}</h2>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-primary my-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-500">{error}</p>
        {transactionId && <p className="text-green-500">Your transaction Id: {transactionId}</p>}
      </form>
    </div>
  );
};

export default CheckOutForm;
