import { Box, Image, Stack, Text } from '@chakra-ui/react';
import router from 'next/router';
import PriceFormat from '../../utils/priceFormat';

type productInfo = {
    product: {
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
};

const handleProductClick = (product: { _id: string }) => {
    router.push(`/shop/${product._id}`, undefined, { shallow: true });
};

const SlideProductCard = (myProduct: productInfo) => {

    const { product } = myProduct;

    return (
        <Box
            borderRadius={10}
            border="1px solid #EBEBEB"
            _hover={{
                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)',
            }}
            w="280px"
            minH="410px"
            pb="2"
            bg="white"
            wordBreak={'break-word'}
            onClick={() => handleProductClick(product)}
        >
            <Image
                borderRadius={'10px 10px 0 0'}
                h="270px"
                w="100%"
                objectFit={'cover'}
                src={product.image}
                alt={product.title}
            />
            <Box mx="5">
                <Text
                    fontSize={'xl'}
                    fontWeight={'bold'}
                    mt="2"
                    wordBreak={'break-word'}
                >
                    {product.title}
                </Text>
                <Stack spacing={0}>
                    {/*Exemplo com desconto*/}
                    <Text
                        fontSize={'3xl'}
                        fontWeight={'extrabold'}
                        mt="4"
                        color={'purple.600'}
                    >
                        {PriceFormat(product.price)}
                    </Text>
                    <Text
                        transform={'translateY(-10px)'}
                        color={'#A0A0A0'}
                    >
                        Á vista no PIX
                    </Text>
                </Stack>
            </Box>
        </Box>
    );
};
export default SlideProductCard;
