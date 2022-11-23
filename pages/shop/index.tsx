import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Layout from '../../components/Layout/Layout';
import ShopFilters from '../../components/Shop/shopFiltersPage/filters';
import ShopHeader from '../../components/Shop/shopFiltersPage/header';
import SlideProductCard from '../../components/Slide/productCard';
import FetchProducts from '../../utils/fetchProducts';

type ProductInfo = {
    products: [];
    _id: string;
    title: string;
    price: number;
    image: string[];
    description: string;
    category: string;
    brand: string;
    material: string;
    stock: number;
    size: string[];
    color: string[];
};

const Shop = () => {
    const router = useRouter();
    const query = router.query;
    const search = query.search?.toString();

    FetchProducts();
    const { products } = useSelector((state: ProductInfo) => state);

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const filter = products.filter((product: { title: string }) =>
            product.title
                .toLowerCase()
                .includes(search ? search.toLowerCase() : '')
        );
        setFilteredProducts(filter);
    }, [search, products]);

    return (
        <Layout>
            <ShopHeader />
            <Flex
                w="100%"
                direction={'column'}
                alignItems={'start'}
                mb={5}
                gap={3}
            >
                <ShopFilters />
                <HStack
                    borderRadius={'xl'}
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
            </Flex>
        </Layout>
    );
};
export default Shop;
