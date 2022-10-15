import { Box, Flex } from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';

import Summary from '../components/Cart/cartcomponents/summary';
import CartItems from '../components/Cart/cartcomponents/cartItems';

const Cart = () => {
    return (
        <Layout>
            <Box p={['4', '8', '10']}>
                <Flex
                    direction={['column', 'column', 'row']}
                    gap={3}
                >
                    <CartItems />
                    <Summary />
                </Flex>
            </Box>
        </Layout>
    );
};
export default Cart;
