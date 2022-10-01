import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper';
import {
    Box,
    Center,
    Text,
    Divider,
    useMediaQuery,
    Image,
    HStack,
    Stack,
    Button,
} from '@chakra-ui/react';
import {
    BsStarFill,
    BsStarHalf,
    BsStar,
    BsHeart,
    BsHeartFill,
} from 'react-icons/bs';

import { setProducts } from '../Redux/ProductSlice';
import api from '../../api/axios';

type productInfo = {
    products: [] | null;
    _id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    brand: string;
    material: string;
    stock: number;
    size: [];
};

export default function NewProductSlider() {
    const [isLargerThan1920] = useMediaQuery('(min-width: 1920px)');
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
    const [isLargerThan425] = useMediaQuery('(min-width: 425px)');

    const myProducts = useSelector((state: productInfo) => state.products);
    const products = myProducts ? [...myProducts] : [];
    products.reverse();

    const dispatch = useDispatch();

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await api.get('/products');
                dispatch(setProducts(response.data));
            } catch (err) {
                console.log(err);
            }
        }
        getProducts();
    }, []);

    return (
        <>
            <Center p={'5'}>
                <Divider />
                <Text
                    fontSize={'2xl'}
                    p={'5'}
                >
                    Novidades
                </Text>
                <Divider />
            </Center>
            <Box
                mx={['2', '3', '4', '5']}
                py="5"
            >
                <Swiper
                    slidesPerView={
                        isLargerThan1920
                            ? 9
                            : isLargerThan1280
                            ? 5
                            : isLargerThan768
                            ? 4
                            : isLargerThan425
                            ? 2
                            : 1
                    }
                    slidesPerGroup={1}
                    spaceBetween={10}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 1700,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {products.slice(0, 9).map((product: productInfo) => (
                        <SwiperSlide key={product._id}>
                            <Center>
                                <Box
                                    borderRadius={10}
                                    border="1px solid #e2e8f0"
                                    w="280px"
                                    minH="410px"
                                    pb='2'
                                    bg="white"
                                >
                                    <Image
                                        borderRadius={'10px 10px 0 0'}
                                        h="180px"
                                        w="100%"
                                        objectFit={'cover'}
                                        src={product.image}
                                        alt={product.title}
                                    />
                                    <Box mx="5">
                                        <HStack>
                                            <Text
                                                fontSize={'xl'}
                                                fontWeight={'bold'}
                                                mt="2"
                                                wordBreak={'break-word'}
                                            >
                                                {product.title}
                                            </Text>
                                            <Box mt="2">
                                                <BsHeart color="red" />
                                            </Box>
                                        </HStack>
                                        <HStack>
                                            <BsStarFill color="#9F7AEA" />
                                            <BsStarFill color="#9F7AEA" />
                                            <BsStarFill color="#9F7AEA" />
                                            <BsStarFill color="#9F7AEA" />
                                            <BsStarHalf color="#9F7AEA" />
                                        </HStack>
                                        <Stack spacing={0}>
                                            {/*Exemplo com desconto*/}
                                            <Box
                                                transform={'translateY( 10px)'}
                                            >
                                                <Text
                                                    as="del"
                                                    color={'gray'}
                                                >
                                                    R$
                                                    {product.price
                                                        .toFixed(2)
                                                        .replace('.', ',')}
                                                </Text>
                                            </Box>
                                            <Text
                                                fontSize={'3xl'}
                                                fontWeight={'extrabold'}
                                                mt="4"
                                            >
                                                R$
                                                {product.price
                                                    .toFixed(2)
                                                    .replaceAll('.', ',')}
                                            </Text>
                                            <Text
                                                transform={'translateY(-10px)'}
                                            >
                                                Á vista no PIX
                                            </Text>
                                        </Stack>
                                        <Center mt="5" pb='2'>
                                            <Button
                                                w="100%"
                                                colorScheme={'purple'}
                                            >
                                                Comprar
                                            </Button>
                                        </Center>
                                    </Box>
                                </Box>
                            </Center>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </>
    );
}
