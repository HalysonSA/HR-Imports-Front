import { Box, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import router from 'next/router';
import PriceFormat from '../../utils/priceFormat';
import { ProductInfo } from '../Redux/type';
import LoadingPage from '../utils/loadingPage';

interface ProductCardProps {
    product: ProductInfo;
}

const SlideProductCard = (myProduct: ProductCardProps) => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
    const { product } = myProduct;

    if (!product) {
        return <LoadingPage />;
    }

    const { title, price, image, promotional } = product;

    const myFirstImage = image[0];

    const handleProductClick = (product: { _id: string }) => {
        router.push(`/shop/${product._id}`, undefined, { shallow: false });
    };

    return (
        <Box
            borderRadius={10}
            border="1px solid #EBEBEB"
            _hover={{
                boxShadow: '0px 0px 20px rgba(107, 70, 193, 0.25)',
                cursor: 'pointer',
            }}
            w={['145px', '280px']}
            minH={['280px', '410px']}
            pb="2"
            bg="white"
            wordBreak={'break-word'}
            onClick={() => handleProductClick(product)}
        >
            <Image
                priority={true}
                style={{
                    objectFit: 'cover',
                    borderRadius: '10px 10px 0 0',
                }}
                layout="responsive"
                width={isLargerThan768 ? 280 : 145}
                height={isLargerThan768 ? 280 : 145}
                src={myFirstImage}
                alt={title}
            />
            {promotional && (
                <Box
                    color="white"
                    bgColor={'red'}
                    textAlign={'center'}
                >
                    <Text
                        fontSize={['sm', 'lg']}
                        fontWeight={'semibold'}
                        textTransform={'uppercase'}
                    >
                        Preço Promocional
                    </Text>
                </Box>
            )}
            <Box mx={['3', '5']}>
                <Text
                    noOfLines={[3, 2]}
                    fontSize={['lg', 'xl']}
                    fontWeight={'bold'}
                    mt="2"
                >
                    {title}
                </Text>
                <Stack spacing={0}>
                    {/*Exemplo com desconto*/}
                    <Text
                        noOfLines={[1, 1]}
                        fontSize={['xl', '3xl']}
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
};
export default SlideProductCard;
