import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FetchProducts from '../../../utils/fetchProducts';
import { ProductInfo, ReduxState } from '../../Redux/type';
import SlideProductCard from '../../Slide/productCard';

const ShopItems = () => {
    const router = useRouter();
    const query = router.query;
    const search = query.search?.toString();

    FetchProducts();
    const { products } = useSelector((state: ReduxState) => state);
    const [filteredProducts, setFilteredProducts] = useState<ProductInfo[]>([]);

    useEffect(() => {
        const filter = products.filter((product: { title: string }) =>
            product.title
                .toLowerCase()
                .includes(search ? search.toLowerCase() : '')
        );
        setFilteredProducts(filter);
    }, [search, products]);

    return (
        <>
            <HStack
                bg="purple.600"
                color="white"
                w="100%"
                h="30px"
            >
                <Text
                    fontSize={'lg'}
                    ml={5}
                >
                    {filteredProducts.length} resultados
                    {search != undefined && search != '' && ` para "${search}"`}
                </Text>
            </HStack>
            <Flex
                minH="700px"
                w="100%"
                wrap="wrap"
                justifyContent="center"
                gap={5}
            >
                {filteredProducts.map((product: ProductInfo) => (
                    <Box
                        key={
                            product._id +
                            '' +
                            product.size[0] +
                            '' +
                            product.color[0]
                        }
                    >
                        <SlideProductCard product={product} />
                    </Box>
                ))}
            </Flex>
        </>
    );
};
export default ShopItems;
