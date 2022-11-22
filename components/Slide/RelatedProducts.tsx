import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Box, Text } from '@chakra-ui/react';

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
