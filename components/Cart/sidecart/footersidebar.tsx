import { Stack, Flex, Text, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../../../context/cart';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { cartIsOpen } from '../../Redux/CartSlice';
import PriceFormat from '../../../utils/priceFormat';

const FooterSideBar = () => {
    const { totalValue } = useContext(CartContext);
    const router = useRouter();
    const dispatch = useDispatch();

    const handleCartOpen = () => {
        dispatch(cartIsOpen(false));
        router.push('/cart');
    };

    const handleCartClose = () => {
        router.push('/shop');
        dispatch(cartIsOpen(false));
    };

    return (
        <Stack
            w="100%"
            spacing={5}
            m="5"
        >
            <Flex justifyContent={'space-between'}>
                <Text
                    fontWeight={'extrabold'}
                    fontSize={'xl'}
                >
                    Subtotal:
                </Text>
                <Text
                    fontWeight={'extrabold'}
                    fontSize={'xl'}
                >
                    {PriceFormat(totalValue)}
                </Text>
            </Flex>
            <Button
                fontWeight={'bold'}
                textTransform={'uppercase'}
                variant={'outline'}
                colorScheme={'purple'}
                py="7"
                onClick={() => handleCartOpen()}
            >
                Ir para o carrinho
            </Button>
            <Button
                colorScheme={'purple'}
                fontWeight={'bold'}
                textTransform={'uppercase'}
                py="7"
                onClick={() => handleCartClose()}
            >
                Continuar comprando
            </Button>
        </Stack>
    );
};
export default FooterSideBar;
