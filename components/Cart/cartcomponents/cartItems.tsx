import { Box, Flex } from '@chakra-ui/react';
import HeaderCart from './HeaderCartItem/HeaderCart';
import ProductCard from './ProductCard';

const CartItems = () => {
    return (
        <Flex
            direction={'column'}
            w={['100%', '100%', '65%', '75%']}
            maxW={'1200px'}
            gap={3}
        >
            <HeaderCart />

            <Box
                minH={['100px', '100px', '700px']}
                h="auto"
            >
                <ProductCard />
            </Box>
        </Flex>
    );
};
export default CartItems;
