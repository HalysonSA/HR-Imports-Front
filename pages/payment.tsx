import { Center, Flex, Box } from '@chakra-ui/react';
import StatusBar from '../components/Cart/cartcomponents/statusBar';
import Layout from '../components/Layout/Layout';
import api from '../api/axios';
import StripeComponent from '../components/Cart/stripe';

const Payment = () => {
    const handleSubmit = async () => {
        return;
    };

    return (
        <Layout>
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
        </Layout>
    );
};
export default Payment;
