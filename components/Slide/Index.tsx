import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Box } from '@chakra-ui/react'

import { Pagination, Navigation, Autoplay } from 'swiper'

const test = ['página 1', 'página 2', 'página 3']

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
                {test.map((item) => (
                    <SwiperSlide key={item}>
                        <Box
                            minH="600px"
                            maxH="750px"
                            bg="gray.50"
                        >
                            <h1>{item}</h1>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
