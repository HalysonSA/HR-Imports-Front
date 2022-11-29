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
    const searchParams = query.search?.toString();
    const colorParams = query.color?.toString();
    const priceParams = query.price?.toString();
    const categoryParams = query.category?.toString();
    const brandParams = query.brand?.toString();
    const materialParams = query.material?.toString();
    FetchProducts();
    const { products } = useSelector((state: ReduxState) => state);
    const [filteredProducts, setFilteredProducts] = useState<ProductInfo[]>([]);

    const priceBefore = priceParams?.split('-')[0].replace('+', '') || '0';
    const priceAfter = priceParams?.split('-')[1] || '99999999';

    useEffect(() => {
        const filtered = products.filter(
            (product: ProductInfo) =>
                (colorParams
                    ? Object.values(product.color).includes(colorParams)
                    : true) &&
                product.title
                    .toLowerCase()
                    .includes(searchParams ? searchParams.toLowerCase() : '') &&
                product.category
                    .toLowerCase()
                    .includes(categoryParams?.toLocaleLowerCase() || '') &&
                product.brand
                    .toLowerCase()
                    .includes(brandParams?.toLowerCase() || '') &&
                product.material
                    .toLowerCase()
                    .includes(materialParams?.toLowerCase() || '') &&
                (priceParams
                    ? product.price >= parseInt(priceBefore) &&
                      product.price <= parseInt(priceAfter)
                    : true)
        );

        setFilteredProducts(filtered);
    }, [
        searchParams,
        products,
        colorParams,
        categoryParams,
        brandParams,
        materialParams,
        priceParams,
    ]);

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
                    {searchParams != undefined &&
                        searchParams != '' &&
                        ` para "${searchParams}"`}
                </Text>
            </HStack>
            <Flex
                minH="700px"
                w="100%"
                wrap="wrap"
                justifyContent="center"
                gap={[2, 5]}
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
