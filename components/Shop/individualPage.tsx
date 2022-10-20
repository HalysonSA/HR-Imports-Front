import {
    Box,
    Button,
    Flex,
    Text,
    Stack,
    HStack,
    Image,
    Skeleton,
    SkeletonText,
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
import { useSelector } from 'react-redux';
import { isLoading } from '../Redux/LoadingSlice';
import PriceFormat from '../../utils/priceFormat';

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
    const isLoading = useSelector((state: any) => state.isLoading);

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
        toast.success('Produto adicionado ao carrinho', {
            position: 'top-center',
        });
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
                <Skeleton isLoaded={!isLoading}>
                    Shop/<b>{title}</b>
                </Skeleton>
            </Box>
            <Flex direction={isLargerThan768 ? 'row' : 'column'}>
                <Box
                    w="100%"
                    pl={isLargerThan768 ? 20 : 0}
                >
                    <Skeleton
                        h="100%"
                        isLoaded={!isLoading}
                        fadeDuration={2}
                    >
                        <Image
                            width={'100%'}
                            height={'100%'}
                            objectFit="cover"
                            alt={''}
                            src={image}
                        />
                    </Skeleton>
                </Box>
                <Box
                    w="100%"
                    pl={isLargerThan768 ? 10 : 0}
                >
                    <Skeleton
                        isLoaded={!isLoading}
                        fadeDuration={2}
                    >
                        <Text
                            fontWeight={'bold'}
                            fontSize={'3xl'}
                        >
                            {title}
                        </Text>
                    </Skeleton>
                    <Box>
                        <Skeleton
                            isLoaded={!isLoading}
                            fadeDuration={3}
                        >
                            <Text
                                fontWeight={'extrabold'}
                                fontSize={'3xl'}
                                color={'purple.400'}
                            >
                                {PriceFormat(price)}
                            </Text>
                            <Text transform={'translateY(-10px)'}>
                                Á Vista no PIX ou <b>1x</b> no Cartão
                            </Text>
                        </Skeleton>
                    </Box>
                    <Box>
                        <Skeleton
                            isLoaded={!isLoading}
                            fadeDuration={4}
                        >
                            <Text
                                fontWeight={'extrabold'}
                                fontSize={'lg'}
                            >
                                {PriceFormat(priceInCard)}
                            </Text>
                            <Text transform={'translateY(-10px)'}>
                                Em até 3x de
                                <b>{PriceFormat(priceInCard / 3)}</b> no cartão
                            </Text>
                        </Skeleton>
                    </Box>

                    <Box>
                        <Skeleton
                            isLoaded={!isLoading}
                            fadeDuration={5}
                        >
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
                        </Skeleton>
                    </Box>
                    <Box my="5">
                        <Button
                            name="Adicionar ao carrinho"
                            colorScheme={'purple'}
                            minW="180px"
                            width={['100%', '50%']}
                            p="8"
                            fontSize={'xl'}
                            fontWeight={'bold'}
                            variant={'solid'}
                            textTransform={'uppercase'}
                            onClick={() => {
                                handleAddToCart();
                            }}
                        >
                            Comprar
                        </Button>
                    </Box>
                    <Box>
                        <SkeletonText
                            isLoaded={!isLoading}
                            fadeDuration={5}
                        >
                            <Text fontSize={'lg'}>Categoria: {category}</Text>
                            <Text fontSize={'lg'}>Marca: {brand}</Text>
                            <Text fontSize={'lg'}>Material: {material}</Text>
                            <Text fontSize={'lg'}>Cor: {color}</Text>
                        </SkeletonText>
                    </Box>
                </Box>
            </Flex>
            <Box
                px={[4, 10, 20]}
                py={5}
            >
                <Text
                    fontWeight={'bold'}
                    fontSize={'2xl'}
                    wordBreak={'break-word'}
                >
                    Descrição
                </Text>

                <SkeletonText
                    isLoaded={!isLoading}
                    fadeDuration={5}
                    mt="4"
                    noOfLines={4}
                    spacing="4"
                >
                    <Text>{description}</Text>
                </SkeletonText>
            </Box>
            <RelatedProductSlider />
        </Box>
    );
};
export default IndividualProductPage;
