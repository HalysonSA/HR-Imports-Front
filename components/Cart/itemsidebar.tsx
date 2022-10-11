import {
    Flex,
    Image,
    Text,
    Button,
    Stack,
    Box,
    HStack,
    Center,
    useMediaQuery,
} from '@chakra-ui/react';
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';
import { FiTrash } from 'react-icons/fi';
import { CartContext } from '../../context/cart';
import { useContext } from 'react';

type Product = {
    item: {
        _id: string;
        title: string;
        description: string;
        price: number;
        image: string;
        category: string;
        material: string;
        quantity: number;
        brand: string;
        size: [];
        color: string;
    };
};

const ItemSideBar = ({ item }: Product) => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    const { addItemToCart, removeFromCart } = useContext(CartContext);

    const handleRemoveFromCart = () => {
        removeFromCart(item);
    };

    const handleAddToCart = () => {
        addItemToCart(item);
    };

    return (
        <Flex
            border={'1px solid'}
            borderColor="purple.400"
            direction={'row'}
            minW={'200px'}
            bg="white"
            m="4"
            my="2"
        >
            <Image
                alt=""
                src={item.image}
                w="120px"
                h="120px"
                objectFit={'cover'}
            />

            <Flex
                my="2"
                mx="3"
                direction={'column'}
                w="100%"
            >
                <Stack>
                    <Box>
                        <Text
                            fontWeight={'semibold'}
                            fontSize={'lg'}
                        >
                            {item.title}
                        </Text>
                        <Text
                            fontWeight={'semibold'}
                            fontSize={'lg'}
                        >
                            R${item.price}
                        </Text>
                    </Box>
                    <HStack spacing={2}>
                        <Button
                            colorScheme={'transparent'}
                            color="black"
                            p="0"
                            _hover={{ color: 'purple.400' }}
                            onClick={handleRemoveFromCart}
                        >
                            <MdRemoveCircleOutline size={20} />
                        </Button>
                        <Text fontWeight={'bold'}>{item.quantity}</Text>
                        <Button
                            colorScheme={'transparent'}
                            color="black"
                            p="0"
                            _hover={{ color: 'purple.400' }}
                            onClick={handleAddToCart}
                        >
                            <MdAddCircleOutline size={20} />
                        </Button>
                    </HStack>
                </Stack>
            </Flex>
            {isLargerThan768 ? (
                <Center p="5">
                    <Button
                        bg="transparent"
                        _hover={{
                            color: 'red',
                            bg: 'white',
                            cursor: 'pointer',
                        }}
                        _active={{
                            color: 'red',
                            bg: 'white',
                            transform: 'scale(1.1)',
                        }}
                    >
                        <FiTrash size={20} />
                    </Button>
                </Center>
            ) : null}
        </Flex>
    );
};
export default ItemSideBar;
