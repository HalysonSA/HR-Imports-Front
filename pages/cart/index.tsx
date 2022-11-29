import {
    Box,
    Button,
    Center,
    Flex,
    Spacer,
    Stack,
    Text,
} from '@chakra-ui/react';

import Layout from '../../components/Layout/Layout';

import { useContext } from 'react';
import CartItems from '../../components/Cart/cartcomponents/CartItems';
import StatusBar from '../../components/Cart/cartcomponents/StatusBar';
import Summary from '../../components/Cart/cartcomponents/Summary';
import { CartContext } from '../../context/cart';

import { ToastContainer } from 'react-toastify';

import { useRouter } from 'next/router';
import { MdShoppingCart } from 'react-icons/md';

const Cart = () => {
    const { cart } = useContext(CartContext);

    const router = useRouter();

    return (
        <Layout>
            <ToastContainer />
            <Box
                minH="100vh"
                p={['4', '8', '10']}
                bg="white"
            >
                <Center m={5}>
                    <StatusBar />{' '}
                </Center>

                <Flex
                    direction={['column', 'column', 'row']}
                    gap={5}
                >
                    {cart?.length === 0 ? (
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
