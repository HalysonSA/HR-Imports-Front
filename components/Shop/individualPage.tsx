import { Box, Button, Flex, Text, Stack, Image } from '@chakra-ui/react';
import RelatedProductSlider from '../Slide/RelatedProducts';
import { useMediaQuery } from '@chakra-ui/react';

type ProductInfo = {
    _id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    material: string;
    brand: string;
    size: [];
    color: string;
};
type Product = {
    product: ProductInfo;
};

const IndividualProductPage = (product: Product) => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    const {
        title,
        description,
        price,
        image,
        category,
        material,
        size,
        color,
        brand,
    } = product.product;

    const priceInCard = price + (price * 5) / 100;

    return (
        <Box
            py={5}
            px={2}
        >
            <Box
                pl={isLargerThan768 ? 10 : 0}
                h="40px"
            >
                Shop/<b>{title}</b>
            </Box>
            <Flex direction={isLargerThan768 ? 'row' : 'column'}>
                <Box
                    w="100%"
                    pl={isLargerThan768 ? 20 : 0}
                >
                    <Image
                        alt="a"
                        src={image}
                    />
                </Box>
                <Box
                    w="100%"
                    pl={isLargerThan768 ? 10 : 0}
                >
                    <Text
                        fontWeight={'bold'}
                        fontSize={'3xl'}
                    >
                        {title}
                    </Text>
                    <Stack>
                        <Box>
                            <Text
                                fontWeight={'extrabold'}
                                fontSize={'3xl'}
                                color={'purple.400'}
                            >
                                R$ {price.toFixed(2).replace('.', ',')}
                            </Text>
                            <Text transform={'translateY(-10px)'}>
                                Á Vista no PIX ou <b>1x</b> no Cartão
                            </Text>
                        </Box>
                        <Box>
                            <Text
                                fontWeight={'extrabold'}
                                fontSize={'lg'}
                            >
                                R$ {priceInCard.toFixed(2).replace('.', ',')}
                            </Text>
                            <Text transform={'translateY(-10px)'}>
                                Em até 3x de{' '}
                                <b>
                                    {(priceInCard / 3)
                                        .toFixed(2)
                                        .replace('.', ',')}
                                </b>{' '}
                                no cartão
                            </Text>
                        </Box>
                        <Button
                            colorScheme={'purple'}
                            minW="180px"
                            width="50%"
                            p="8"
                            fontSize={'xl'}
                            variant={'outline'}
                        >
                            Comprar
                        </Button>

                        <Box>
                        
                            <Text fontSize={'lg'}>Categoria: {category}</Text>
                            <Text fontSize={'lg'}>Marca: {brand}</Text>
                            <Text fontSize={'lg'}>Material: {material}</Text>
                            <Text fontSize={'lg'}>Cor: {color}</Text>
                        </Box>
                    </Stack>
                </Box>
            </Flex>
            <Box
                px={[4, 10, 20]}
                py={5}
            >
                <Text
                    fontWeight={'bold'}
                    fontSize={'2xl'}
                >
                    Descrição
                </Text>
                <Text pl={4}>{description}</Text>
            </Box>
            <RelatedProductSlider />
        </Box>
    );
};
export default IndividualProductPage;
