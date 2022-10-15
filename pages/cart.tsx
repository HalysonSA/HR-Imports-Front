import { Box, Flex, Spacer } from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';

import Summary from '../components/Cart/cartcomponents/summary';
import CartItems from '../components/Cart/cartcomponents/cartItems';

const Cart = () => {
    return (
        <Layout>
            <Box
                p={['4', '8', '10']}
                bg="white"
            >
                <Flex
                    direction={['column', 'column', 'row']}
                    gap={5}
                >
                    <CartItems />
                    <Summary />
                </Flex>
            </Box>
            <Spacer />
        </Layout>
    );
};
export default Cart;
