import {
    Box,
    Flex,
    HStack,
    Select,
    Stack,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';
import {
    MdOutlineExpandMore,
    MdOutlineProductionQuantityLimits,
} from 'react-icons/md';
import Layout from '../components/Layout/Layout';

const Orders = () => {
    const [isLargetThan768] = useMediaQuery('(min-width: 768px)');

    return (
        <Layout>
            <Box minH={'700px'}>
                <HStack py={4}>
                    <MdOutlineProductionQuantityLimits
                        size={30}
                        fill={'#6B46C1'}
                    />
                    <Text
                        fontSize={'2xl'}
                        fontWeight={'bold'}
                        textTransform={'uppercase'}
                    >
                        Meus Pedidos
                    </Text>
                </HStack>

                <HStack
                    minW="300px"
                    py={4}
                >
                    <Text fontSize="lg"> Filtrar por:</Text>
                    <Select
                        focusBorderColor="purple.600"
                        maxW="170px"
                        onChange={(e) => {}}
                        fontSize="lg"
                    >
                        <option value={'sent'}>Enviado</option>
                        <option value={'processing'}>Processamento</option>
                        <option value={'success'}>Concluido</option>
                        <option value={'canceled'}>Cancelado</option>
                        <option value={'pending'}>Pendente</option>
                    </Select>
                </HStack>

                <Flex
                    minH={'80px'}
                    my={4}
                    p={8}
                    gap={4}
                    direction={'row'}
                    justifyContent={'space-around'}
                    alignItems={'center'}
                    borderRadius={'2xl'}
                    border={'1px solid #d3d3d3'}
                    _hover={{
                        boxShadow: '0px 0px 20px rgba(107, 70, 193, 0.25)',
                        border: 'none',
                        transition: 'all 0.2s ease-in-out',
                    }}
                    fontSize={'lg'}
                    fontWeight={'bold'}
                    wrap={'wrap'}
                >
                    <Stack>
                        <Text>#ID do Pedido</Text>
                        <Box>
                            <Text color={'purple.600'}>
                                ihumfyu9q23gf8h98gfwuei
                            </Text>
                        </Box>
                    </Stack>
                    {isLargetThan768 && (
                        <>
                            <Stack minW={'150px'}>
                                <Text>Status</Text>
                                <Box>
                                    <Text color={'orange.400'}>Pendente</Text>
                                </Box>
                            </Stack>
                            <Stack minW={'150px'}>
                                <Text>Data</Text>
                                <Text color={'purple.600'}>2021-08-01</Text>
                            </Stack>
                            <Stack minW={'150px'}>
                                <Text>Pagamento</Text>
                                <Text color={'purple.600'}>
                                    Cartão de Crédito
                                </Text>
                            </Stack>
                        </>
                    )}
                    <HStack
                        _hover={{
                            color: 'purple.600',
                            cursor: 'pointer',
                        }}
                    >
                        <Text>Detalhes</Text>
                        <MdOutlineExpandMore size={20} />
                    </HStack>
                </Flex>
                <Flex
                    minH={'80px'}
                    my={4}
                    p={8}
                    gap={4}
                    direction={'row'}
                    justifyContent={'space-around'}
                    alignItems={'center'}
                    borderRadius={'2xl'}
                    border={'1px solid #d3d3d3'}
                    _hover={{
                        boxShadow: '0px 0px 20px rgba(107, 70, 193, 0.25)',
                        border: 'none',
                        transition: 'all 0.2s ease-in-out',
                    }}
                    fontSize={'lg'}
                    fontWeight={'bold'}
                    wrap={'wrap'}
                >
                    <Stack>
                        <Text>#ID do Pedido</Text>
                        <Box>
                            <Text color={'purple.600'}>
                                892389fni2h8rf2h7f290432
                            </Text>
                        </Box>
                    </Stack>
                    {isLargetThan768 && (
                        <>
                            <Stack minW={'150px'}>
                                <Text>Status</Text>
                                <Box>
                                    <Text color={'green.400'}>Enviado</Text>
                                </Box>
                            </Stack>
                            <Stack minW={'150px'}>
                                <Text>Data</Text>
                                <Text color={'purple.600'}>2021-08-01</Text>
                            </Stack>
                            <Stack minW={'150px'}>
                                <Text>Pagamento</Text>
                                <Text color={'purple.600'}>Boleto</Text>
                            </Stack>
                        </>
                    )}
                    <HStack
                        _hover={{
                            color: 'purple.600',
                            cursor: 'pointer',
                        }}
                    >
                        <Text>Detalhes</Text>
                        <MdOutlineExpandMore size={20} />
                    </HStack>
                </Flex>
            </Box>
        </Layout>
    );
};
export default Orders;
