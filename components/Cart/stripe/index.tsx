import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../../context/cart';
import { CustomerContext } from '../../../context/customer';
import api from '../../api/axios';
import CheckoutForm from './Checkout';

const stripePromise = loadStripe(
    `${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`
);

const StripeComponent = () => {
    const { totalValue } = useContext(CartContext);
    const { customer, handleClientSecret, clientSecret } =
        useContext(CustomerContext);

    useEffect(() => {
        (async () => {
            const response = await api.put('/payments', {
                email: customer.email,
                name: customer.first_name + ' ' + customer.last_name,
                amount: totalValue * 100, //stripe works with cents
            });
            response != null && handleClientSecret(response.data.clientSecret);
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
