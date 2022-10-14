import {
    Box,
    Button,
    Flex,
    HStack,
    Text,
    useMediaQuery,
    Stack,
    Center,
} from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';

import { BsBasket2Fill } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { AiOutlineFileSearch } from 'react-icons/ai';

const Cart = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return (
        <Layout>
            <Box p={['4', '8', '10']}>
                <Flex
                    direction={'row'}
                    gap={3}
                >
                    <Flex
                        direction={'column'}
                        w={['100%', '100%', '75%']}
                        gap={3}
                    >
                        <Flex
                            justifyContent={'space-between'}
                            alignContent={'center'}
                            minH={'50px'}
                            flexWrap={'wrap'}
                        >
                            <HStack>
                                <BsBasket2Fill
                                    size={25}
                                    fill={'#6B46C1'}
                                />
                                <Text
                                    fontWeight={'bold'}
                                    fontSize={'2xl'}
                                >
                                    Seus Produtos
                                </Text>
                            </HStack>
                            <Box pt="2">
                                <Button
                                    variant={'outline'}
                                    colorScheme={'red'}
                                >
                                    <FaTrash size={15} />
                                    <Text
                                        pl={2}
                                        fontWeight={'bold'}
                                        fontSize={'md'}
                                    >
                                        Limpar Carrinho
                                    </Text>
                                </Button>
                            </Box>
                        </Flex>
                        <Box
                            bg="papayawhip"
                            h="700px"
                        >
                            Produtos devem aparecer aqui
                        </Box>
                    </Flex>
                    {isLargerThan768 ? (
                        <Box
                            w={'25%'}
                            top={'100px'}
                            position={'sticky'}
                            h="370px"
                        >
                            <Flex direction={'column'}>
                                <HStack>
                                    <AiOutlineFileSearch
                                        size={25}
                                        fill={'#6B46C1'}
                                    />
                                    <Text
                                        fontSize={'2xl'}
                                        fontWeight={'bold'}
                                    >
                                        Resumo
                                    </Text>
                                </HStack>
                                <Text>Valor total:</Text>
                                <Text>Frete:</Text>
                                <Text>Total à prazo:</Text>
                                <Stack
                                    spacing={4}
                                    mt="5"
                                >
                                    <Box
                                        bg="purple.100"
                                        color={'purple.500'}
                                        py="5"
                                    >
                                        <Center>
                                            <Text fontSize={'sm'}>
                                                Valor à vista no <b>Pix</b>:
                                            </Text>
                                        </Center>
                                        <Center>
                                            <Text
                                                fontSize={'2xl'}
                                                fontWeight={'extrabold'}
                                            >
                                                <b>R$ 9999</b>
                                            </Text>
                                        </Center>
                                        <Center>
                                            <Text>
                                                Economia de <b>7%</b>
                                            </Text>
                                        </Center>
                                    </Box>
                                    <Button colorScheme="purple">
                                        <Text
                                            fontSize={'xl'}
                                            fontWeight={'bold'}
                                        >
                                            Finalizar compra
                                        </Text>
                                    </Button>
                                    <Button
                                        variant={'outline'}
                                        colorScheme={'purple'}
                                    >
                                        <Text
                                            fontSize={'xl'}
                                            fontWeight={'bold'}
                                        >
                                            Continuar comprando
                                        </Text>
                                    </Button>
                                </Stack>
                            </Flex>
                        </Box>
                    ) : null}
                </Flex>
            </Box>
        </Layout>
    );
};
export default Cart;
