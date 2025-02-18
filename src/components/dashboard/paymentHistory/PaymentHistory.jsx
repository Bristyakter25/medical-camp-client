import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from 'sweetalert2';

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        const response = await axiosSecure.get('/payments', { params: { email: user.email } });
        setPaymentHistory(response.data);
      } catch (error) {
        console.error('Error fetching payment history:', error);
        Swal.fire({
          title: 'Error!',
          text: 'There was an error fetching your payment history.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    };

    if (user?.email) {
      fetchPaymentHistory();
    }
  }, [user?.email, axiosSecure]);

  return (
    <div>
      <h2 className="text-center w-full my-5 text-3xl text-[#A294F9] font-bold ">Payment History</h2>
      <table className="min-w-full bg-white border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-200">Date</th>
            <th className="px-4 py-2 border border-gray-200">Amount</th>
            <th className="px-4 py-2 border border-gray-200">Transaction ID</th>
            <th className="px-4 py-2 border border-gray-200">Status</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((payment) => (
            <tr key={payment.transactionId}>
              <td className="px-4 py-2 border border-gray-200">{new Date(payment.date).toLocaleDateString()}</td>
              <td className="px-4 py-2 border border-gray-200">${payment.price}</td>
              <td className="px-4 py-2 border border-gray-200">{payment.transactionId}</td>
              <td className="px-4 py-2 border border-gray-200">{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
