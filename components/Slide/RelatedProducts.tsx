import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useRouter } from 'next/router';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Box, Text, useMediaQuery } from '@chakra-ui/react';

import { setProducts } from '../Redux/ProductSlice';
import api from '../../api/axios';
import NewProductSlider from './NewProducts';

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

export default function RelatedProductSlider() {

    return (
        <Box>
            <Text
                px={[4, 10, 20]}
                py={5}
                fontWeight={'bold'}
                fontSize={'2xl'}
            >
                Produtos Relacionados
            </Text>

            <Box
                cursor={'grab'}
                mx={['2', '3', '4', '5']}
            >
                <NewProductSlider />
            </Box>
        </Box>
    );
}
