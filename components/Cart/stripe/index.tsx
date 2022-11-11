import api from '../../../api/axios';
import React, { useContext, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './checkout';
import { CartContext } from '../../../context/cart';
import { CustomerContext } from '../../../context/customer';

const stripePromise = loadStripe(
    `${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`
);

const StripeComponent = () => {
    const [clientSecret, setClientSecret] = useState('');

    const  { totalValue} = useContext(CartContext);
    const { customer } = useContext(CustomerContext);
    useEffect(() => {
        (async () => {
            const response = await api.put('/payments', {
                email: customer.email,
                name:customer.first_name + ' ' + customer.last_name,     
                amount: totalValue*100, //stripe works with cents
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
