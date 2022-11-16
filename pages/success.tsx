import { useContext, useEffect } from 'react';
import StatusBar from '../components/Cart/cartcomponents/statusBar';
import { CartContext } from '../context/cart';
import Layout from '../components/Layout/Layout';
import { Center, Text, Box } from '@chakra-ui/react';

import { motion } from 'framer-motion';
import router from 'next/router';

const Success = () => {
    const { clearCart } = useContext(CartContext);

    useEffect(() => {
        clearCart();
    }, []);

    function redirectToHome() {
        router.push('/');
    }

    if (typeof window !== 'undefined') {
        setTimeout(redirectToHome, 5000);
    }

    return (
        <Layout>
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
        </Layout>
    );
};
export default Success;
