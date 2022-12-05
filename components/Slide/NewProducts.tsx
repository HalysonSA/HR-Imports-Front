import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Box, Center, useMediaQuery } from '@chakra-ui/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

import FetchProducts from '../../utils/fetchProducts';
import { ProductInfo, ReduxState } from '../Redux/type';
import SlideProductCard from './productCard';

export default function NewProductSlider() {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    FetchProducts();
    const { products } = useSelector((state: ReduxState) => state);

    return (
        <Box
            mx={2}
            py="5"
            cursor={'grab'}
        >
            <Swiper
                slidesPerView={isLargerThan1280 ? 4 : isLargerThan768 ? 3 : 2}
                slidesPerGroup={1}
                spaceBetween={5}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 1700,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {products
                    .slice(0, 9)
                    .reverse()
                    .map((product: ProductInfo) => (
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
