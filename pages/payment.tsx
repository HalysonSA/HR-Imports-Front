import { Box, Center, Flex } from '@chakra-ui/react';
import StatusBar from '../components/Cart/cartcomponents/statusBar';
import StripeComponent from '../components/Cart/stripe';
import Layout from '../components/Layout/Layout';

const Payment = () => {
    return (
        <Layout>
            {/*<RouterGuard>*/}
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
            {/*</RouterGuard>*/}
        </Layout>
    );
};
export default Payment;
