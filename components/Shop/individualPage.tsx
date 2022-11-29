import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Flex,
    HStack,
    Stack,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';
import { toast, ToastContainer } from 'react-toastify';
import RelatedProductSlider from '../Slide/RelatedProducts';

import {
    MdOutlineAddCircleOutline,
    MdOutlineRemoveCircleOutline,
} from 'react-icons/md';

import { RiCheckLine } from 'react-icons/ri';

import { useEffect, useState } from 'react';

import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartContext } from '../../context/cart';
import PriceFormat from '../../utils/priceFormat';
import { cartIsOpen } from '../Redux/CartSlice';

import { ChevronRightIcon } from '@chakra-ui/icons';
import ProductGallery from './ProductGallery';

import { useRouter } from 'next/router';
import FetchProducts from '../../utils/fetchProducts';
import LoadingPage from '../../utils/loadingPage';
import { ProductInfo, ReduxState } from '../Redux/type';

const IndividualProductPage = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    const router = useRouter();
    const dispatch = useDispatch();

    const { addItemToCart } = useContext(CartContext);
    const id = router.asPath.split('/')[2];

    FetchProducts();

    const product = useSelector((state: ReduxState) =>
        state.products.find((item: ProductInfo) => item._id === id)
    );

    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (product) {
            setSelectedColor(product.color[0]);
            setSelectedSize(product.size[0]);
        }
    }, [product]);

    if (product !== undefined && product !== null) {
        const {
            _id,
            title,
            description,
            price,
            image,
            category,
            material,
            brand,
        } = product;

        var { size, color } = product;

        const handleAddToCart = () => {
            size = [];
            color = [];

            size.push(selectedSize);
            color.push(selectedColor);

            if (size[0] !== '' && color[0] !== '') {
                addItemToCart({
                    _id,
                    title,
                    description,
                    price,
                    image,
                    category,
                    material,
                    size,
                    color,
                    brand,
                    quantity,
                });
                toast.success('Produto adicionado ao carrinho', {
                    position: isLargerThan768 ? 'top-center' : 'bottom-center',
                });
                dispatch(cartIsOpen(true));
            } else {
                toast.error('Escolha uma cor e um tamanho', {
                    position: 'top-center',
                });
            }
        };

        return (
            <Box
                py={5}
                px={2}
            >
                <ToastContainer />
                <Box
                    pl={isLargerThan768 ? 20 : 0}
                    py="5"
                >
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
                        <BreadcrumbItem>
                            <Text
                                color="gray.500"
                                fontSize="sm"
                            >
                                {title}
                            </Text>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
                <Flex direction={isLargerThan768 ? 'row' : 'column'}>
                    <Box
                        w="100%"
                        pl={isLargerThan768 ? 20 : 0}
                    >
                        <ProductGallery />
                    </Box>
                    <Box
                        mt={isLargerThan768 ? 0 : 5}
                        w="100%"
                        pl={isLargerThan768 ? 10 : 0}
                    >
                        <Text
                            fontWeight={'bold'}
                            fontSize={'3xl'}
                        >
                            {title}
                        </Text>
                        <Box mt={isLargerThan768 ? 0 : 5}>
                            <Text
                                fontWeight={'extrabold'}
                                fontSize={'3xl'}
                                color={'purple.600'}
                            >
                                {PriceFormat(price)}
                            </Text>
                            <Text transform={'translateY(-10px)'}>
                                Á Vista no PIX ou <b>1x</b> no Cartão
                            </Text>
                        </Box>

                        <Box>
                            <Text
                                fontSize={'lg'}
                                fontWeight={'bold'}
                                color={'purple.600'}
                            >
                                Quantidade
                            </Text>
                            <HStack>
                                <Button
                                    colorScheme={'transparent'}
                                    borderRadius="20px"
                                    onClick={() => {
                                        quantity > 1
                                            ? setQuantity(quantity - 1)
                                            : null;
                                    }}
                                >
                                    <MdOutlineRemoveCircleOutline
                                        fill={'gray'}
                                        size={20}
                                    />
                                </Button>
                                <Text
                                    fontSize={'lg'}
                                    fontWeight={'semibold'}
                                >
                                    {quantity}
                                </Text>
                                <Button
                                    colorScheme={'transparent'}
                                    borderRadius="20px"
                                    onClick={() => {
                                        setQuantity(quantity + 1);
                                    }}
                                >
                                    <MdOutlineAddCircleOutline
                                        fill={'gray'}
                                        size={20}
                                    />
                                </Button>
                            </HStack>
                        </Box>
                        <Stack>
                            <Box>
                                <Text
                                    fontSize={'lg'}
                                    fontWeight={'bold'}
                                    color={'purple.600'}
                                >
                                    Tamanho
                                </Text>
                                <HStack>
                                    {size &&
                                        size.map((size: string) => (
                                            <Button
                                                key={size}
                                                color={
                                                    selectedSize === size
                                                        ? 'white'
                                                        : 'purple.600'
                                                }
                                                borderRadius="20px"
                                                border={'1px solid #6B46C1'}
                                                bgColor={
                                                    selectedSize === size
                                                        ? '#6B46C1'
                                                        : 'white'
                                                }
                                                _hover={{
                                                    transform: 'scale(1.1)',
                                                    transition:
                                                        'all 0.2s ease-in-out',
                                                }}
                                                onClick={() =>
                                                    setSelectedSize(size)
                                                }
                                            >
                                                <Text
                                                    fontSize={'lg'}
                                                    fontWeight={'bold'}
                                                >
                                                    {size}
                                                </Text>
                                            </Button>
                                        ))}
                                </HStack>
                            </Box>
                            <Box>
                                <Text
                                    fontSize={'lg'}
                                    fontWeight={'bold'}
                                    color={'purple.600'}
                                >
                                    Cor
                                </Text>
                                <HStack>
                                    {color &&
                                        color.map((color: string) => (
                                            <Button
                                                key={color}
                                                bgColor={color}
                                                border={
                                                    color === 'white' ||
                                                    color === '#ffffff'
                                                        ? '1px solid #000000'
                                                        : 'none'
                                                }
                                                borderRadius="20px"
                                                colorScheme={'transparent'}
                                                transform={
                                                    selectedColor === color
                                                        ? 'scale(1.2)'
                                                        : 'scale(1)'
                                                }
                                                _hover={{
                                                    transform: 'scale(1.1)',
                                                    transition:
                                                        'all 0.2s ease-in-out',
                                                }}
                                                onClick={() =>
                                                    setSelectedColor(color)
                                                }
                                            >
                                                {selectedColor === color && (
                                                    <RiCheckLine
                                                        size={18}
                                                        fill={
                                                            color === 'white' ||
                                                            color === '#ffffff'
                                                                ? 'black'
                                                                : 'white'
                                                        }
                                                    />
                                                )}
                                            </Button>
                                        ))}
                                </HStack>
                            </Box>
                            <Box>
                                <Text
                                    fontSize={'lg'}
                                    fontWeight={'bold'}
                                    color={'purple.600'}
                                >
                                    Material
                                </Text>
                                <HStack>
                                    <Text>{material}</Text>
                                </HStack>
                            </Box>
                            <Box>
                                <Text
                                    fontSize={'lg'}
                                    fontWeight={'bold'}
                                    color={'purple.600'}
                                >
                                    Marca
                                </Text>
                                <HStack>
                                    <Text>{brand}</Text>
                                </HStack>
                            </Box>
                            <Box>
                                <Text
                                    fontSize={'lg'}
                                    fontWeight={'bold'}
                                    color={'purple.600'}
                                >
                                    Categoria
                                </Text>
                                <HStack>
                                    <Text>{category}</Text>
                                </HStack>
                            </Box>
                        </Stack>
                        <Box my="5">
                            <Button
                                name="Adicionar ao carrinho"
                                colorScheme={'purple'}
                                minW="180px"
                                width={['100%', '100%']}
                                p="8"
                                fontSize={'xl'}
                                fontWeight={'bold'}
                                variant={'solid'}
                                textTransform={'uppercase'}
                                onClick={() => {
                                    handleAddToCart();
                                }}
                            >
                                Adicionar ao carrinho
                            </Button>
                        </Box>
                        <Accordion allowMultiple>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                    >
                                        <Text
                                            fontSize={'lg'}
                                            fontWeight={'bold'}
                                            color={'purple.600'}
                                        >
                                            Detalhes
                                        </Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Text>Detalhes técnicos do produto</Text>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                    >
                                        <Text
                                            fontSize={'lg'}
                                            fontWeight={'bold'}
                                            color={'purple.600'}
                                        >
                                            Descrição
                                        </Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Text>{description}</Text>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </Flex>
                <RelatedProductSlider />
            </Box>
        );
    } else {
        return <LoadingPage />;
    }
};
export default IndividualProductPage;
