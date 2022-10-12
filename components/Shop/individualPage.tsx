import {
    Box,
    Button,
    Flex,
    Text,
    Stack,
    HStack,
    Image,
} from '@chakra-ui/react';
import RelatedProductSlider from '../Slide/RelatedProducts';
import { useMediaQuery } from '@chakra-ui/react';
import { toast, ToastContainer } from 'react-toastify';

import {
    MdOutlineAddCircleOutline,
    MdOutlineRemoveCircleOutline,
} from 'react-icons/md';

import { useState } from 'react';

import { useContext } from 'react';
import { CartContext } from '../../context/cart';

type ProductInfo = {
    product: {
        _id: string;
        title: string;
        description: string;
        price: number;
        image: string;
        category: string;
        material: string;
        brand: string;
        size: [];
        color: string;
    };
};
const IndividualProductPage = ({ product }: ProductInfo) => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
    const { addItemToCart, removeFromCart } = useContext(CartContext);

    const {
        _id,
        title,
        description,
        price,
        image,
        category,
        material,
        size,
        color,
        brand,
    } = product;

    const priceInCard = price + (price * 5) / 100;

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addItemToCart({
            _id,
            title,
            description,
            price,
            image,
            category,
            material,
            size,
            color,
            brand,
            quantity,
        });
        toast.success('Produto adicionado ao carrinho');
    };

    return (
        <Box
            py={5}
            px={2}
        >
            <ToastContainer />
            <Box
                pl={isLargerThan768 ? 20 : 0}
                py="5"
            >
                Shop/<b>{title}</b>
            </Box>
            <Flex direction={isLargerThan768 ? 'row' : 'column'}>
                <Box
                    w="100%"
                    pl={isLargerThan768 ? 20 : 0}
                >
                    <Image
                        width={'100%'}
                        height={'100%'}
                        objectFit="cover"
                        alt={''}
                        src={image}
                    />
                </Box>
                <Box
                    w="100%"
                    pl={isLargerThan768 ? 10 : 0}
                >
                    <Text
                        fontWeight={'bold'}
                        fontSize={'3xl'}
                    >
                        {title}
                    </Text>
                    <Stack>
                        <Box>
                            <Text
                                fontWeight={'extrabold'}
                                fontSize={'3xl'}
                                color={'purple.400'}
                            >
                                R$ {price.toFixed(2).replace('.', ',')}
                            </Text>
                            <Text transform={'translateY(-10px)'}>
                                Á Vista no PIX ou <b>1x</b> no Cartão
                            </Text>
                        </Box>
                        <Box>
                            <Text
                                fontWeight={'extrabold'}
                                fontSize={'lg'}
                            >
                                R$ {priceInCard.toFixed(2).replace('.', ',')}
                            </Text>
                            <Text transform={'translateY(-10px)'}>
                                Em até 3x de{' '}
                                <b>
                                    {(priceInCard / 3)
                                        .toFixed(2)
                                        .replace('.', ',')}
                                </b>{' '}
                                no cartão
                            </Text>
                        </Box>

                        <Box>
                            <Text fontSize={'lg'}>Quantidade:</Text>
                            <HStack>
                                <Button
                                    borderRadius="20px"
                                    onClick={() => {
                                        quantity > 1
                                            ? setQuantity(quantity - 1)
                                            : null;
                                    }}
                                >
                                    <MdOutlineRemoveCircleOutline
                                        fill={'gray'}
                                        size={20}
                                    />
                                </Button>
                                <Text
                                    fontSize={'lg'}
                                    fontWeight={'semibold'}
                                >
                                    {quantity}
                                </Text>
                                <Button
                                    borderRadius="20px"
                                    onClick={() => {
                                        setQuantity(quantity + 1);
                                    }}
                                >
                                    <MdOutlineAddCircleOutline
                                        fill={'gray'}
                                        size={20}
                                    />
                                </Button>
                            </HStack>
                        </Box>

                        <Button
                            name="Adicionar ao carrinho"
                            colorScheme={'purple'}
                            minW="180px"
                            width={['100%', '50%']}
                            p="8"
                            fontSize={'xl'}
                            variant={'outline'}
                            onClick={() => {
                                handleAddToCart();
                            }}
                        >
                            Comprar
                        </Button>

                        <Box>
                            <Text fontSize={'lg'}>Categoria: {category}</Text>
                            <Text fontSize={'lg'}>Marca: {brand}</Text>
                            <Text fontSize={'lg'}>Material: {material}</Text>
                            <Text fontSize={'lg'}>Cor: {color}</Text>
                        </Box>
                    </Stack>
                </Box>
            </Flex>
            <Box
                px={[4, 10, 20]}
                py={5}
            >
                <Text
                    fontWeight={'bold'}
                    fontSize={'2xl'}
                >
                    Descrição
                </Text>
                <Text>{description}</Text>
            </Box>
            <RelatedProductSlider />
        </Box>
    );
};
export default IndividualProductPage;
