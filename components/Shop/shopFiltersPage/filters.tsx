import { CheckIcon } from '@chakra-ui/icons';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Flex,
    HStack,
    Select,
    Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFiltersSync from '../../../utils/myFiltersState';
import { setShopFilters } from '../../Redux/ProductSlice';
import { ReduxState } from '../../Redux/type';

const ShopFilters = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedMaterial, setSelectedMaterial] = useState('');

    //price range available
    const prices = ['0-75', '75-200', '200-500', '500+'];

    const productsProps = {
        color: selectedColor,
        size: selectedSize,
        category: selectedCategory,
        brand: selectedBrand,
        price: selectedPrice,
        material: selectedMaterial,
    };

    const sortingCheck = (orderBy: string) => {
        dispatch(
            setShopFilters({
                _orderBy: orderBy,
            })
        );
    };

    useEffect(() => {
        const searchRestored = router.query;

        router.push({
            pathname: '/shop/',
            query: {
                ...searchRestored,
                ...productsProps,
            },
        });
    }, [
        selectedSize,
        selectedColor,
        selectedCategory,
        selectedBrand,
        selectedPrice,
        selectedMaterial,
    ]);

    const filters = useSelector((state: ReduxState) => state.filters);
    useFiltersSync();

    return (
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
                {Object.keys(filters).map((key: string) => {
                    if (key !== 'prices' && key !== 'colors') {
                        return (
                            <Accordion
                                allowMultiple
                                border="1px solid white"
                                minW="144px"
                                maxW="300px"
                                key={key}
                            >
                                <AccordionItem w={'100%'}>
                                    <AccordionButton
                                        _hover={{
                                            bgColor: 'purple.600',
                                            color: 'white',
                                            transition: '0.3s ease',
                                        }}
                                        _expanded={{
                                            bg: 'purple.600',
                                            color: 'white',
                                        }}
                                    >
                                        <Box
                                            flex="1"
                                            textAlign="left"
                                        >
                                            {key === 'sizes'
                                                ? 'Tamanho'
                                                : key === 'categories'
                                                ? 'Categoria'
                                                : key === 'brands'
                                                ? 'Marca'
                                                : key === 'materials'
                                                ? 'Material'
                                                : ''}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>

                                    <AccordionPanel pb={4}>
                                        {
                                            // @ts-ignore
                                            filters[key].map(
                                                (value: string) => (
                                                    <HStack
                                                        key={value}
                                                        my={1}
                                                    >
                                                        <Button
                                                            size={'xs'}
                                                            color={'black'}
                                                            bgColor={'white'}
                                                            borderRadius={'md'}
                                                            border={
                                                                '1px solid black'
                                                            }
                                                            onClick={() => {
                                                                key === 'sizes'
                                                                    ? selectedSize ===
                                                                      value
                                                                        ? setSelectedSize(
                                                                              ''
                                                                          )
                                                                        : setSelectedSize(
                                                                              value
                                                                          )
                                                                    : key ===
                                                                      'categories'
                                                                    ? selectedCategory ===
                                                                      value
                                                                        ? setSelectedCategory(
                                                                              ''
                                                                          )
                                                                        : setSelectedCategory(
                                                                              value
                                                                          )
                                                                    : key ===
                                                                      'brands'
                                                                    ? selectedBrand ===
                                                                      value
                                                                        ? setSelectedBrand(
                                                                              ''
                                                                          )
                                                                        : setSelectedBrand(
                                                                              value
                                                                          )
                                                                    : key ===
                                                                      'materials'
                                                                    ? selectedMaterial ===
                                                                      value
                                                                        ? setSelectedMaterial(
                                                                              ''
                                                                          )
                                                                        : setSelectedMaterial(
                                                                              value
                                                                          )
                                                                    : '';
                                                            }}
                                                        >
                                                            {key ===
                                                                'categories' &&
                                                                selectedCategory ===
                                                                    value && (
                                                                    <CheckIcon />
                                                                )}
                                                            {key === 'brands' &&
                                                                selectedBrand ===
                                                                    value && (
                                                                    <CheckIcon />
                                                                )}

                                                            {key === 'sizes' &&
                                                                selectedSize ===
                                                                    value && (
                                                                    <CheckIcon />
                                                                )}
                                                            {key ==
                                                                'materials' &&
                                                                selectedMaterial ==
                                                                    value && (
                                                                    <CheckIcon />
                                                                )}
                                                        </Button>

                                                        <Text>{value}</Text>
                                                    </HStack>
                                                )
                                            )
                                        }
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        );
                    }
                })}

                <Accordion
                    allowMultiple
                    border="1px solid white"
                    minW="144px"
                    maxW="300px"
                >
                    <AccordionItem w={'100%'}>
                        <AccordionButton
                            _hover={{
                                bgColor: 'purple.600',
                                color: 'white',
                                transition: '0.3s ease',
                            }}
                            _expanded={{
                                bg: 'purple.600',
                                color: 'white',
                            }}
                        >
                            <Box
                                flex="1"
                                textAlign="left"
                            >
                                Cor
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                            <HStack wrap={'wrap'}>
                                {filters.colors.map((color) => (
                                    <HStack
                                        key={color}
                                        my={2}
                                    >
                                        <Button
                                            size={'sm'}
                                            colorScheme="transparent"
                                            bgColor={color}
                                            color={
                                                color === 'white' ||
                                                color === '#ffffff'
                                                    ? 'black'
                                                    : 'white'
                                            }
                                            borderRadius={'full'}
                                            border={
                                                color === 'white' ||
                                                color === '#ffffff'
                                                    ? '1px solid black'
                                                    : 'none'
                                            }
                                            onClick={() => {
                                                selectedColor === color
                                                    ? setSelectedColor('')
                                                    : setSelectedColor(color);
                                            }}
                                        >
                                            {selectedColor === color && (
                                                <CheckIcon />
                                            )}
                                        </Button>
                                    </HStack>
                                ))}
                            </HStack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion
                    allowMultiple
                    border="1px solid white"
                    minW="144px"
                    maxW="300px"
                >
                    <AccordionItem w={'100%'}>
                        <AccordionButton
                            _hover={{
                                bgColor: 'purple.600',
                                color: 'white',
                                transition: '0.3s ease',
                            }}
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
                            {prices.map((price) => (
                                <HStack
                                    key={price}
                                    my={2}
                                >
                                    <Button
                                        size={'xs'}
                                        bgColor="white"
                                        borderRadius={'md'}
                                        border={'1px solid black'}
                                        onClick={() => {
                                            selectedPrice === price
                                                ? setSelectedPrice('')
                                                : setSelectedPrice(price);
                                        }}
                                    >
                                        {selectedPrice === price ? (
                                            <CheckIcon fill="black" />
                                        ) : null}
                                    </Button>

                                    <Text>{price}</Text>
                                </HStack>
                            ))}
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
            <HStack minW="300px">
                <Text fontSize="lg"> Ordernar por:</Text>
                <Select
                    focusBorderColor="purple.600"
                    maxW="170px"
                    onChange={(e) => sortingCheck(e.target.value)}
                >
                    <option value="default">Mais populares</option>
                    <option value="lowPrice">Menor preço</option>
                    <option value="higPrice">Maior preço</option>
                    <option value="hot">Ofertas</option>
                </Select>
            </HStack>
        </Flex>
    );
};
export default ShopFilters;
