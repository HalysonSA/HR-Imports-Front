import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation, Autoplay } from 'swiper'
import { Box, Center, Text, Divider, useMediaQuery } from '@chakra-ui/react'

const test = [
    'Produto 1',
    'produto 2',
    'produto 3',
    'produto 4',
    'produto 5',
    'produto 6',
    'produto 7',
    'produto 8',
    'produto 9',
]

export default function NewProductSlider() {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

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
            <Box>
                <Swiper
                    slidesPerView={isLargerThan768 ? 5 : 2}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 1700,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {test.map((item) => (
                        <SwiperSlide key={item}>
                            <Box
                                h="300px"
                                bg="gray.50"
                            >
                                <h1>{item}</h1>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </>
    )
}
