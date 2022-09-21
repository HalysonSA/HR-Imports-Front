import {
    Box,
    Center,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    ButtonGroup,
    Button,
} from '@chakra-ui/react';

import { FaEdit, FaTrash } from 'react-icons/fa';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../api/axios';
import { setProducts } from '../../Redux/ProductSlice';

type productInfo = {
    _id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    brand: string;
    material: string;
    stock: number;
    size: [];
};

type productDetails = {
    products: productInfo[];
};

const ProductsTable = () => {
    const dispatch = useDispatch();

    const products = useSelector((state: productDetails) => state.products);
    const totalProducts = products.length;
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await api.get('/products');
                dispatch(setProducts(response.data));
            } catch (err) {
                console.log(err);
            }
        }
        getProducts();
    }, []);

    var page = products.slice(pageNumber - 1, pageNumber * 10);

    if (pageNumber > 1) {
        page = products.slice(pageNumber * 10 - 10, pageNumber * 10);
    }

    function nextPage() {
        if (pageNumber >= 1 && pageNumber < totalProducts / 10) {
            setPageNumber(pageNumber + 1);
        }
        return pageNumber;
    }

    function previousPage() {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
        return pageNumber;
    }

    return (
        <Box bg={'rgba(255,255,255,0.7)'}>
            <TableContainer>
                <Table
                    fontSize={'md'}
                    colorScheme="white"
                    color="black"
                >
                    <Thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>Descrição</Th>
                            <Th>Preço</Th>
                            <Th>Categoria</Th>
                            <Th>Tamanhos</Th>
                            <Th>Quantidade</Th>
                            <Th>Editar</Th>
                            <Th>Excluir</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {page.map((product: productInfo) => (
                            <Tr key={product._id}>
                                <Td>{product.title}</Td>
                                <Td>{product.description}</Td>
                                <Td isNumeric>R${product.price}</Td>
                                <Td>{product.category}</Td>
                                <Td isNumeric>
                                    {product.size.map((size) => size + ' ')}
                                </Td>
                                <Td isNumeric>{product.stock}</Td>
                                <Th>
                                    <Button
                                        bg="transparent"
                                        _hover={{
                                            color: 'teal.300',
                                            transform: 'scale(1.2)',
                                        }}
                                        _active={{ bg: 'trasparent' }}
                                    >
                                        <FaEdit />
                                    </Button>
                                </Th>
                                <Th>
                                    <Button
                                        bg="transparent"
                                        _hover={{
                                            color: 'red',
                                            transform: 'scale(1.2)',
                                        }}
                                        _active={{ bg: 'trasparent' }}
                                    >
                                        <FaTrash />
                                    </Button>
                                </Th>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>

                <Center w="100%">
                    <ButtonGroup>
                        <Button
                            bg="transparent"
                            _focus={{ bg: 'transparent' }}
                            _hover={{ bg: 'transparent' }}
                            onClick={previousPage}
                        >
                            {pageNumber === 1 ? null : <ArrowLeftIcon />}
                        </Button>
                        <Button
                            bg="transparent"
                            fontSize={'lg'}
                            fontWeight={'Bold'}
                            _focus={{ bg: 'transparent' }}
                            _hover={{ bg: 'transparent' }}
                        >
                            {pageNumber}
                        </Button>
                        <Button
                            bg="transparent"
                            _focus={{ bg: 'transparent' }}
                            _hover={{ bg: 'transparent' }}
                            onClick={nextPage}
                        >
                            {pageNumber < totalProducts / 10 ? (
                                <ArrowRightIcon />
                            ) : null}
                        </Button>
                    </ButtonGroup>
                </Center>
            </TableContainer>
        </Box>
    );
};
export default ProductsTable;
