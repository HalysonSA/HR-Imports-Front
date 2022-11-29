import Layout from '../components/Layout/Layout';
import StatusBar from '../components/Cart/cartcomponents/statusBar';
import CartItems from '../components/Cart/cartcomponents/cartItems';
import FormEntries from '../components/Cart/identification/formEntries';
import { Box, Center, Flex } from '@chakra-ui/react';
import RouterGuard from '../components/RoutingGuard';

const Identification = () => {
    return (
        <Layout>
            <RouterGuard>
                <Center m={5}>
                    <StatusBar />
                </Center>
                <Flex
                    direction={['column', 'column', 'row']}
                    gap={5}
                >
                    <Box
                        w={['100%', '100%', '85%', '75%']}
                        mb={5}
                    >
                        <FormEntries />
                    </Box>
                    <CartItems />
                </Flex>
            </RouterGuard>
        </Layout>
    );
};
export default Identification;
