import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Box } from '@chakra-ui/react';

import Image from 'next/image';

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
                        <Box cursor={'grab'}>
                            <Image
                                loader={({ src }) => src}
                                width="1500px"
                                height="768px"
                                objectFit="fill"
                                src={item}
                                alt="slide"
                            />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
