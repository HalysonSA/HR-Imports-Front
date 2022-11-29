import { Box, Center, Flex } from '@chakra-ui/react';
import StatusBar from '../components/Cart/cartcomponents/StatusBar';
import StripeComponent from '../components/Cart/Stripe/index';
import Layout from '../components/Layout/Layout';
import RouterGuard from '../components/RoutingGuard';

const Payment = () => {
    const handleSubmit = async () => {
        return;
    };

    return (
        <Layout>
            <RouterGuard>
                <Center m={5}>
                    <StatusBar />
                </Center>
                <Flex
                    gap={5}
                    direction={'column'}
                >
                    <Flex borderRadius={'20px'}>
                        <Box
                            w="100%"
                            borderRadius={'15px'}
                            minH="800px"
                        >
                            <StripeComponent />
                        </Box>
                    </Flex>
                </Flex>
            </RouterGuard>
        </Layout>
    );
};
export default Payment;
