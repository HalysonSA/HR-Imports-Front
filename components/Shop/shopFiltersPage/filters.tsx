import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    HStack,
    Select,
    Text,
} from '@chakra-ui/react';
const ShopFilters = () => {
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
    );
};
export default ShopFilters;
