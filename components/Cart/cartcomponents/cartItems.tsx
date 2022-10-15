import { Box, Flex, HStack, Text, Button, Center } from '@chakra-ui/react';
import { useContext } from 'react';
import { BsBasket2Fill } from 'react-icons/bs';
import { FiTrash } from 'react-icons/fi';
import { CartContext } from '../../../context/cart';
import ProductCard from './productCard';

const CartItems = () => {
    const { clearCart, cart } = useContext(CartContext);

    return (
        <Flex
            direction={'column'}
            w={['100%', '100%', '65%', '75%']}
            maxW={'1200px'}
            gap={3}
        >
            <Flex
                justifyContent={'space-between'}
                alignContent={'center'}
                minH={'50px'}
                flexWrap={'wrap'}
            >
                <HStack>
                    <BsBasket2Fill
                        size={25}
                        fill={'#6B46C1'}
                    />
                    <Text
                        fontWeight={'bold'}
                        fontSize={'2xl'}
                        textTransform={'uppercase'}
                    >
                        Seus Produtos
                    </Text>
                </HStack>
                <Box pt="2">
                    <Button
                        variant={'outline'}
                        colorScheme={'red'}
                        onClick={() => clearCart()}
                    >
                        <FiTrash size={15} />
                        <Text
                            pl={2}
                            fontWeight={'extrabold'}
                            fontSize={'sm'}
                            textTransform={'uppercase'}
                        >
                            Limpar Carrinho
                        </Text>
                    </Button>
                </Box>
            </Flex>
            <Box
                minH="700px"
                h="auto"
            >
                {cart.length === 0 ? (
                    <Center>
                        <Text
                            fontSize={'2xl'}
                            color={'#7F858D'}
                        >
                            Seu carrinho está vazio
                        </Text>
                    </Center>
                ) : (
                    <ProductCard />
                )}
            </Box>
        </Flex>
    );
};
export default CartItems;
