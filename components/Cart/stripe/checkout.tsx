import React, { useContext, useState } from 'react';
import {
    useStripe,
    useElements,
    PaymentElement,
} from '@stripe/react-stripe-js';
import {  Button, Center, Container } from '@chakra-ui/react';
import api from '../../../api/axios';
import { CustomerContext } from '../../../context/customer';
import { CartContext } from '../../../context/cart';
import { toast, ToastContainer } from 'react-toastify';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState(null);
    const { customer } = useContext(CustomerContext);
    const { cart } = useContext(CartContext);
     

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        
        await api.post('/orders', {
            user: customer,
            cart: cart,
            payment: {
                payment_status: 'pending',
            },
        });

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const response = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/success',
            },
        });


        if (response.error) {
            toast.error('Seu pagamento foi recusado');
        } else {
            toast.success('Pagamento realizado com sucesso!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Container bg='gray.100' borderRadius={'20px'} p={4}>
                <ToastContainer />
                <PaymentElement />
                <Button  disabled={!stripe} type={'submit'}>
                    <Center>Confirmar pagamento</Center>
                    
                </Button>
            </Container>

            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};

export default CheckoutForm;
