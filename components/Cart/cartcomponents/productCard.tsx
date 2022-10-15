import { Image, Flex, HStack, Text, Button, Stack } from '@chakra-ui/react';
import { useContext } from 'react';
import { FiTrash } from 'react-icons/fi';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { CartContext } from '../../../context/cart';

const ProductCard = () => {
    const { addItemToCart, removeFromCart, cart, removeProduct } =
        useContext(CartContext);

    return (
        <>
            {cart.map((item) => (
                <Flex
                    key={item._id}
                    direction={['column', 'column', 'column', 'row']}
                    my={2}
                >
                    <Image
                        objectFit={'cover'}
                        h="150px"
                        w="150px"
                        alt=""
                        src={item.image}
                    />
                    <Flex
                        direction={['column', 'column', 'row']}
                        w="100%"
                        gap={3}
                    >
                        <HStack w="100%">
                            <Flex direction={'column'}>
                                <Text color={'#7F858D'}>{item.brand}</Text>
                                <Text
                                    wordBreak={'break-word'}
                                    fontSize={'xl'}
                                    fontWeight={'bold'}
                                >
                                    {item.title}
                                </Text>
                                <Text color={'#7F858D'}>
                                    Á Vista no PIX:
                                    <b>
                                        {' '}
                                        R$
                                        {item.price
                                            .toFixed(2)
                                            .replace('.', ',')}{' '}
                                    </b>
                                </Text>
                                <Text color={'#7F858D'}>
                                    Parcelado no cartão em até 3x sem juros:
                                    <b>
                                        {' '}
                                        R$
                                        {((item.price * 5) / 100 + item.price)
                                            .toFixed(2)
                                            .replace('.', ',')}{' '}
                                    </b>
                                </Text>
                            </Flex>
                        </HStack>
                        <HStack
                            my={3}
                            w="100%"
                        >
                            <Flex
                                w={'100%'}
                                maxW={'450px'}
                                direction={'row'}
                                justifyContent={'space-between'}
                                textAlign={'center'}
                            >
                                <Flex>
                                    <Stack spacing={0}>
                                        <Text fontSize={'sm'}>Quantidade</Text>

                                        <HStack spacing={0}>
                                            <Button
                                                colorScheme={'transparent'}
                                                onClick={() =>
                                                    removeFromCart(item)
                                                }
                                            >
                                                <MdKeyboardArrowLeft
                                                    fill={'#9F7AEA'}
                                                    size={25}
                                                />
                                            </Button>

                                            <Text
                                                fontWeight={'bold'}
                                                fontSize={'lg'}
                                            >
                                                {item.quantity}
                                            </Text>
                                            <Button
                                                colorScheme={'transparent'}
                                                onClick={() =>
                                                    addItemToCart(item)
                                                }
                                            >
                                                <MdKeyboardArrowRight
                                                    fill="#9F7AEA"
                                                    size={25}
                                                />
                                            </Button>
                                        </HStack>

                                        <Button
                                            variant={'ghost'}
                                            colorScheme={'red'}
                                            onClick={() => removeProduct(item)}
                                        >
                                            <FiTrash size={12} />
                                            <Text
                                                pl={2}
                                                fontWeight={'extrabold'}
                                                fontSize={'sm'}
                                                textTransform={'uppercase'}
                                            >
                                                Remover
                                            </Text>
                                        </Button>
                                    </Stack>
                                </Flex>
                                <Flex
                                    direction={'row'}
                                    textAlign={'center'}
                                    justifyContent={'space-between'}
                                >
                                    <Stack alignItems={'end'}>
                                        <Text fontSize={'sm'}>
                                            Preço á vista no <b>Pix</b>:
                                        </Text>
                                        <Text
                                            color={'purple.500'}
                                            fontWeight={'extrabold'}
                                            fontSize={'lg'}
                                        >
                                            R${' '}
                                            {item.price
                                                .toFixed(2)
                                                .replace('.', ',')}
                                        </Text>
                                    </Stack>
                                </Flex>
                            </Flex>
                        </HStack>
                    </Flex>
                </Flex>
            ))}
        </>
    );
};
export default ProductCard;
