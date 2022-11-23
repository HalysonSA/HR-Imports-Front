import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    Flex,
    HStack,
    Select,
    Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Layout from '../../components/Layout/Layout';
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
    }, [search]);

    console.log(filteredProducts);

    return (
        <Layout>
            <HStack my={5}>
                <Breadcrumb
                    spacing={'8px'}
                    separator={<ChevronRightIcon color="gray.500" />}
                >
                    <BreadcrumbItem>
                        <Text
                            color="gray.500"
                            fontSize="sm"
                        >
                            Home
                        </Text>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Text
                            color="gray.500"
                            fontSize="sm"
                        >
                            Shop
                        </Text>
                    </BreadcrumbItem>
                </Breadcrumb>
            </HStack>

            <Flex
                w="100%"
                direction={'column'}
                alignItems={'start'}
                mb={5}
                gap={3}
            >
                <Flex
                    w="100%"
                    wrap={'wrap'}
                    flexDirection="row"
                    justifyContent={'space-between'}
                    alignItems="center"
                >
                    <Flex
                        wrap={'wrap'}
                        flexDirection="row"
                        alignItems={'start'}
                    >
                        <Accordion
                            allowMultiple
                            border="1px solid white"
                            maxW="300px"
                        >
                            <AccordionItem w={'100%'}>
                                <AccordionButton
                                    _expanded={{
                                        bg: 'purple.600',
                                        color: 'white',
                                    }}
                                >
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                    >
                                        Categoria
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel pb={4}>
                                    pesquisa por categoria e tem o select
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <Accordion
                            allowMultiple
                            border="1px solid white"
                            maxW="300px"
                        >
                            <AccordionItem w={'100%'}>
                                <AccordionButton
                                    _expanded={{
                                        bg: 'purple.600',
                                        color: 'white',
                                    }}
                                >
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                    >
                                        Marca
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel pb={4}>
                                    pesquisa por marca e tem o select
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <Accordion
                            allowMultiple
                            border="1px solid white"
                            maxW="300px"
                        >
                            <AccordionItem w={'100%'}>
                                <AccordionButton
                                    _expanded={{
                                        bg: 'purple.600',
                                        color: 'white',
                                    }}
                                >
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                    >
                                        Material
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel pb={4}>
                                    pesquisa por material e tem o select
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                        <Accordion
                            allowMultiple
                            border="1px solid white"
                            maxW="300px"
                        >
                            <AccordionItem w={'100%'}>
                                <AccordionButton
                                    _expanded={{
                                        bg: 'purple.600',
                                        color: 'white',
                                    }}
                                >
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                    >
                                        Tamanho
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel pb={4}>
                                    pesquisa por tamanho e tem o select
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <Accordion
                            allowMultiple
                            border="1px solid white"
                            maxW="300px"
                        >
                            <AccordionItem w={'100%'}>
                                <AccordionButton
                                    _expanded={{
                                        bg: 'purple.600',
                                        color: 'white',
                                    }}
                                >
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                    >
                                        Preço
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel pb={4}>
                                    pesquisa por preço e tem o select
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Flex>
                    <HStack minW="300px">
                        <Text fontSize="lg"> Ordernar por:</Text>
                        <Select maxW="170px">
                            <option value="option0">Mais populares</option>
                            <option value="option1">Menor preço</option>
                            <option value="option2">Maior preço</option>
                            <option value="option3">Ofertas</option>
                        </Select>
                    </HStack>
                </Flex>
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
