import {
    Box,
    Button,
    Flex,
    Text,
    HStack,
    useMediaQuery,
    AccordionItem,
    AccordionButton,
    Accordion,
    AccordionIcon,
    AccordionPanel,
    Stack,
} from '@chakra-ui/react';
import RelatedProductSlider from '../Slide/RelatedProducts';
import { toast, ToastContainer } from 'react-toastify';

import {
    MdOutlineAddCircleOutline,
    MdOutlineRemoveCircleOutline,
} from 'react-icons/md';

import { RiCheckLine } from 'react-icons/ri';

import { useState } from 'react';

import { useContext } from 'react';
import { CartContext } from '../../context/cart';
import { useDispatch } from 'react-redux';
import PriceFormat from '../../utils/priceFormat';
import { cartIsOpen } from '../Redux/CartSlice';

import ProductGallery from './productGallery';

type ProductInfo = {
    product: {
        _id: string;
        title: string;
        description: string;
        price: number;
        image: string;
        category: string;
        material: string;
        brand: string;
        size: [];
        color: [];
    };
};
const IndividualProductPage = ({ product }: ProductInfo) => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    const { addItemToCart, removeFromCart } = useContext(CartContext);

    const [selected, setSelected] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const {
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
    } = product;

    const handleAddToCart = () => {
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
                Shop/<b>{title}</b>
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
                    <Box mt={
                        isLargerThan768 ? 0 : 5
                    }>
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
                                {size.map((size) => (
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
                                            transition: 'all 0.2s ease-in-out',
                                        }}
                                        onClick={() => setSelectedSize(size)}
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
                                {color.map((color) => (
                                    <Button
                                        key={color}
                                        bgColor={color}
                                        borderRadius="20px"
                                        colorScheme={'transparent'}
                                        transform={
                                            selected === color
                                                ? 'scale(1.2)'
                                                : 'scale(1)'
                                        }
                                        _hover={{
                                            transform: 'scale(1.1)',
                                            transition: 'all 0.2s ease-in-out',
                                        }}
                                        onClick={() => setSelected(color)}
                                    >

                                        {selected === color && (<RiCheckLine size={18} />)}
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
                                <Text>
                                    Duração da bateria: 10 horas, Produto com 1
                                    ano de garantia, Peso: 0,5 kg, Dimensões:
                                    20x20x20, Material: Plástico, Cor: Preto,
                                    Marca: D13.
                                </Text>
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
};
export default IndividualProductPage;
