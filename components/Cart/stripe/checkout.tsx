import {
    Box,
    Button,
    Center,
    Container,
    Spinner,
    Text,
} from '@chakra-ui/react';
import {
    PaymentElement,
    useElements,
    useStripe,
} from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { isLoading } from '../../Redux/LoadingSlice';
import LoadingPage from '../../utils/loadingPage';

import { useRouter } from 'next/router';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const dispatch = useDispatch();
    const itsLoading = useSelector((state: any) => state.isLoading);

    const router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        dispatch(isLoading(true));

        if (!stripe || !elements) {
            return <LoadingPage />;
        }

        const response = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',
        });

        if (response.paymentIntent) {
            toast.success('Seu pagamento foi aprovado');
            router.push({
                pathname: '/success',
                query: {
                    payment_intent: response.paymentIntent.id,
                    payment_status: response.paymentIntent.status,
                    payment_date: response.paymentIntent.created,
                    payment_amount: response.paymentIntent.amount,
                    //@ts-ignore - Stripe types are not up to date
                    payment_method: response.paymentIntent.payment_method,
                },
            });
        }

        if (response.error) {
            toast.error('Seu pagamento foi recusado');
        }

        dispatch(isLoading(false));
    };

    return (
        <Box mb={10}>
            <form onSubmit={handleSubmit}>
                <Center mt={20}>
                    <Container
                        border={'1px solid #e2e8f0'}
                        boxShadow={'2xl'}
                        borderRadius={'xl'}
                        p={4}
                    >
                        <ToastContainer />

                        <Text
                            pb="5"
                            fontSize="2xl"
                            fontWeight="bold"
                            textAlign="center"
                            color={'purple.600'}
                        >
                            Preencha as informações necessárias
                        </Text>
                        <PaymentElement />
                        <Button
                            type={'submit'}
                            borderRadius={'20px'}
                            minW={'120px'}
                            mt={4}
                            colorScheme={'purple'}
                            disabled={!stripe}
                        >
                            {itsLoading ? (
                                <Spinner color="white" />
                            ) : (
                                <Text
                                    p={6}
                                    fontSize={'lg'}
                                    fontWeight={'bold'}
                                >
                                    Pagar
                                </Text>
                            )}
                        </Button>
                    </Container>
                </Center>
            </form>
        </Box>
    );
};

export default CheckoutForm;
