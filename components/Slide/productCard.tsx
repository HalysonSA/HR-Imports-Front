import { Box, Image, Stack, Text } from '@chakra-ui/react';
import router from 'next/router';
import LoadingPage from '../../utils/loadingPage';
import PriceFormat from '../../utils/priceFormat';
import { ProductInfo } from '../Redux/type';

const handleProductClick = (product: { _id: string }) => {
    router.push(`/shop/${product._id}`, undefined, { shallow: false });
};

interface ProductCardProps {
    product: ProductInfo;
}

const SlideProductCard = (myProduct: ProductCardProps) => {
    const { product } = myProduct;
    if (product) {
        const { title, price, image, _id } = product;

        return (
            <Box
                borderRadius={10}
                border="1px solid #EBEBEB"
                _hover={{
                    boxShadow: '0px 0px 20px rgba(107, 70, 193, 0.25)',
                    cursor: 'pointer',
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
                    src={image[0]}
                    alt={title}
                />
                <Box mx="5">
                    <Text
                        fontSize={'xl'}
                        fontWeight={'bold'}
                        mt="2"
                        wordBreak={'break-word'}
                    >
                        {title}
                    </Text>
                    <Stack spacing={0}>
                        {/*Exemplo com desconto*/}
                        <Text
                            fontSize={'3xl'}
                            fontWeight={'extrabold'}
                            mt="4"
                            color={'purple.600'}
                        >
                            {PriceFormat(price)}
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
    } else {
        return <LoadingPage />;
    }
};
export default SlideProductCard;
