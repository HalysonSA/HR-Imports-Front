import {
    Box,
    Flex,
    Spacer,
    Center,
    Text,
    Button,
    Stack,
} from '@chakra-ui/react';

import Layout from '../../components/Layout/Layout';

import Summary from '../../components/Cart/cartcomponents/summary';
import CartItems from '../../components/Cart/cartcomponents/cartItems';
import StatusBar from '../../components/Cart/cartcomponents/statusBar';
import { CartContext } from '../../context/cart';
import { useContext } from 'react';

import { MdShoppingCart } from 'react-icons/md';
import { useRouter } from 'next/router';

const Cart = () => {
    const { cart } = useContext(CartContext);

    const router = useRouter();

    return (
        <Layout>
            <Box
                p={['4', '8', '10']}
                bg="white"
            >
                <Center m={5}>
                    <StatusBar />
                </Center>

                <Flex
                    direction={['column', 'column', 'row']}
                    gap={5}
                >
                    {cart.length === 0 ? (
                        <Center w="100%">
                            <Stack>
                                <Text fontSize={'3xl'}>
                                    O seu carrinho está vazio.
                                </Text>
                                <Button
                                    colorScheme={'purple'}
                                    size={'lg'}
                                    onClick={() => {
                                        router.push('/shop');
                                    }}
                                >
                                    <MdShoppingCart />
                                    <Text ml={2}>Continuar comprando</Text>
                                </Button>
                            </Stack>
                        </Center>
                    ) : (
                        <>
                            <CartItems />
                            <Summary />
                        </>
                    )}
                </Flex>
            </Box>
            <Spacer />
        </Layout>
    );
};
export default Cart;
