import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Pay = () => {
    
    return (
        <div>
            <h2>Pay Here!!!!</h2>
            <div>
                <Elements stripe = {stripePromise}>
                    <CheckOutForm></CheckOutForm>

                </Elements>
            </div>
        </div>
    );
};

export default Pay;