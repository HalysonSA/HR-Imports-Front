import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import priceFormat from '../../utils/priceFormat';
import { ProductInfo } from '../Redux/type';

type Props = {
    orderCart: ProductInfo[];
};

const ProductCardInformations = (orderCart: Props) => {
    return (
        <>
            {orderCart.orderCart.map((product) => {
                const { title, image, price, quantity } = product;
                return (
                    <Flex
                        w={'100%'}
                        border={'1px dashed #d3d3d3  '}
                        key={product._id}
                        direction={['column', 'row', 'row']}
                        p={4}
                        gap={5}
                    >
                        <Box>
                            <Image
                                objectFit="cover"
                                src={image[0]}
                                alt={title}
                                width={150}
                                height={150}
                            />
                        </Box>
                        <Stack maxW="350px">
                            <Text
                                fontWeight={'bold'}
                                wordBreak={'break-word'}
                            >
                                {title}
                            </Text>
                            <Text fontWeight={'medium'}>
                                Quantidade: {quantity}
                            </Text>
                            <Text fontWeight={'medium'}>
                                Total: {priceFormat(price)}
                            </Text>
                        </Stack>
                    </Flex>
                );
            })}
        </>
    );
};
export default ProductCardInformations;
