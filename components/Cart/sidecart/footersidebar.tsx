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
                bg="white"
                borderColor={'purple.400'}
                py="7"
                _hover={{
                    bg: 'purple.50',
                }}
                _active={{
                    bg: 'purple.100',
                }}
                onClick={() => handleCartOpen()}
            >
                Finalizar compra
            </Button>
        </Stack>
    );
};
export default FooterSideBar;
