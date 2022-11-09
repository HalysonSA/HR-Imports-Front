import api from '../../../api/axios';
import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './checkout';

const stripePromise = loadStripe(
    `${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`
);

const StripeComponent = () => {
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        (async () => {
            const response = await api.put('/payments', {
                amount: '180,00',
            });
            response != null && setClientSecret(response.data.clientSecret);
        })();
    }, []);

    const appearance = {
        theme: 'stripe',
        labels: 'floating',
        variables: {
            fontFamily: '"Ruda", sans-serif',

            colorPrimary: '#805AD5',
        },
        rules: {
            '.Tab, .Input, .Block': {
                padding: '12px',
            },
        },
    };

    const options = {
        clientSecret,
        appearance: appearance as any,
    };

    return (
        <div>
            {clientSecret && (
                <Elements
                    stripe={stripePromise}
                    options={options}
                >
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
};
export default StripeComponent;
