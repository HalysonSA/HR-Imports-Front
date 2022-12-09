import { Box, Flex } from '@chakra-ui/react';
import HeaderCart from './headerCartItem/headerCart';
import ProductCard from './productCard';

const CartItems = () => {
    return (
        <Flex
            direction={'column'}
            w={['100%', '100%', '65%', '75%']}
            maxW={'1200px'}
            gap={3}
            display={['none', 'flex']}
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
