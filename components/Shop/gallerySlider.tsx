import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import { Image } from '@chakra-ui/react';

export default function GallerySlider({ images }: { images: string[] }) {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {images.map((item) => <SwiperSlide key={item}>
                    <Image src={item} alt="imagem do produtos" />
                </SwiperSlide>)}
            </Swiper>
        </>
    );
}
