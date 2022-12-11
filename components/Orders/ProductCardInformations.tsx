import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';
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
                        borderRadius={'2xl'}
                        key={product._id}
                        direction={['column', 'row', 'row']}
                        p={4}
                        gap={5}
                    >
                        <Box
                            border={'1px solid #d3d3d3'}
                            borderRadius={'2xl'}
                            p={2}
                        >
                            <Image
                                objectFit="cover"
                                src={image[0]}
                                alt={title}
                                width={150}
                                height={150}
                            />
                        </Box>
                        <Stack
                            maxW="350px"
                            spacing={2}
                        >
                            <Text
                                fontWeight={'bold'}
                                fontSize={'xl'}
                                wordBreak={'break-word'}
                            >
                                {title}
                            </Text>
                            <HStack>
                                <Text fontSize={'md'}>Quantidade:</Text>
                                <Text
                                    fontSize={'md'}
                                    color={'white'}
                                    bgColor={'purple.600'}
                                    borderRadius={'lg'}
                                    px={2}
                                >
                                    {quantity}
                                </Text>
                            </HStack>
                            <HStack>
                                <Text fontSize={'md'}>Total:</Text>
                                <Text
                                    fontSize={'md'}
                                    color={'white'}
                                    bgColor={'purple.600'}
                                    borderRadius={'lg'}
                                    px={2}
                                >
                                    {priceFormat(price)}
                                </Text>
                            </HStack>
                        </Stack>
                    </Flex>
                );
            })}
        </>
    );
};
export default ProductCardInformations;
