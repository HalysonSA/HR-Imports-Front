import { Box, Center, Text } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import StatusBar from '../components/Cart/cartcomponents/statusBar';
import Layout from '../components/Layout/Layout';
import { CartContext } from '../context/cart';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import api from '../components/api/axios';
import RouterGuard from '../components/RoutingGuard';
import { CustomerContext } from '../context/customer';

const Success = () => {
    const { clearCart, cart } = useContext(CartContext);
    const { customer } = useContext(CustomerContext);

    const router = useRouter();

    const { payment_intent, payment_status, payment_amount, payment_date } =
        router.query;

    useEffect(() => {
        async function redirectToHome() {
            if (!payment_intent) {
                location.href = '/';
            }

            if (cart.length !== 0 && customer) {
                await api
                    .post('/orders', {
                        user: customer,
                        cart: cart,
                        payment: {
                            payment_status: payment_status,
                            payment_intent: payment_intent,
                            payment_amount: payment_amount,
                            payment_date: payment_date,
                        },
                    })
                    .then(() => {
                        clearCart();
                    });
            }
        }

        if (typeof window !== 'undefined') {
            setTimeout(redirectToHome, 5000);
        }
    }, [customer, cart]);

    return (
        <Layout>
            <RouterGuard>
                <Center m={5}>
                    <StatusBar />
                </Center>
                <Center minH={'500px'}>
                    <Box cursor={'pointer'}>
                        <motion.div
                            className="box"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.3 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                        >
                            <Text
                                fontSize={'3xl'}
                                fontWeight={'bold'}
                                color={'purple.500'}
                            >
                                Obrigado pela sua compra!
                            </Text>
                        </motion.div>
                    </Box>
                </Center>
            </RouterGuard>
        </Layout>
    );
};
export default Success;
