import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Box, Image } from '@chakra-ui/react';

import { Autoplay, Navigation, Pagination } from 'swiper';

const slide = ['/smart.png', '/frete.png'];

export default function Carousel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {slide.map((item) => (
                    <SwiperSlide key={item}>
                        <Box
                            minH="500px"
                            maxH="750px"
                            bg="gray.50"
                            cursor={'grab'}
                        >
                            <Image
                                w="auto"
                                minH={'500px'}
                                src={item}
                                alt="Banner"
                                objectFit="cover"
                                objectPosition={'10%'}
                            />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
