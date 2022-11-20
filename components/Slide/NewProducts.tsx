import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Box, Center, useMediaQuery } from '@chakra-ui/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

import FetchProducts from '../../utils/fetchProducts';
import SlideProductCard from './productCard';

type productInfo = {
    products: [] | null;
    _id: string;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    brand: string;
    material: string;
    stock: number;
    size: [];
    color: string;
};

export default function NewProductSlider() {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
    const [isLargerThan425] = useMediaQuery('(min-width: 425px)');

    const myProducts = useSelector((state: productInfo) => state.products);
    const products = myProducts ? [...myProducts] : [];
    products.reverse();

    FetchProducts();

    return (
        <Box
            mx={['2', '3', '4', '4']}
            py="5"
            cursor={'pointer'}
        >
            <Swiper
                slidesPerView={
                    isLargerThan1280
                        ? 4
                        : isLargerThan768
                        ? 3
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
                        <Center my="5">
                            <SlideProductCard product={product} />
                        </Center>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
