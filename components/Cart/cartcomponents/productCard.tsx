import {
    Box,
    Button,
    Circle,
    Flex,
    HStack,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { FiTrash } from 'react-icons/fi';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { CartContext } from '../../../context/cart';
import PriceFormat from '../../../utils/priceFormat';

const ProductCard = () => {
    const { addItemToCart, removeFromCart, cart, removeProduct } =
        useContext(CartContext);

    return (
        <>
            {cart.map((item) => (
                <Flex
                    key={item._id + item.size[0] + item.color[0]}
                    direction={['column', 'column', 'column', 'row']}
                    my={2}
                    gap={3}
                >
                    <Image
                        objectFit={'cover'}
                        minW="150px"
                        minH="150px"
                        h="150px"
                        w="150px"
                        alt=""
                        src={item.image[0]}
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
                                    <b>{PriceFormat(item.price)}</b>
                                </Text>
                                <HStack>
                                    <Circle
                                        size="40px"
                                        bg="purple.600"
                                        color="white"
                                    >
                                        <Text
                                            fontSize={'lg'}
                                            fontWeight={'bold'}
                                        >
                                            {item.size[0]}
                                        </Text>
                                    </Circle>
                                    <Circle
                                        size="40px"
                                        bg={item.color[0]}
                                        color="white"
                                    ></Circle>
                                </HStack>
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
                                    <Stack spacing={5}>
                                        <Box>
                                            <Text fontSize={'sm'}>
                                                Quantidade
                                            </Text>

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
                                        </Box>

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
                                            {PriceFormat(item.price)}
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
