import {
    Box,
    Button,
    Center,
    Divider,
    Flex,
    HStack,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { CartContext } from '../../../context/cart';
import PriceFormat from '../../../utils/priceFormat';

const Summary = () => {
    const { totalValue } = useContext(CartContext);

    return (
        <Box
            w={['100%', '100%', '35%', '25%']}
            maxW={'450px'}
            top={'100px'}
            position={'sticky'}
            h="500px"
        >
            <Flex direction={'column'}>
                <HStack>
                    <AiOutlineFileSearch
                        size={25}
                        fill={'#6B46C1'}
                    />
                    <Text
                        fontSize={'3xl'}
                        fontWeight={'extrabold'}
                        textTransform={'uppercase'}
                    >
                        Resumo
                    </Text>
                </HStack>
                <Flex justifyContent={'space-between'}>
                    <Text fontSize={'md'}>Valor total: </Text>
                    <Text fontSize={'lg'}>
                        <b>
                            {PriceFormat((totalValue * 5) / 100 + totalValue)}
                        </b>
                    </Text>
                </Flex>
                <Divider orientation="horizontal" />
                <Flex justifyContent={'space-between'}>
                    <Text fontSize={'md'}>Frete:</Text>
                    <Text fontSize={'lg'}>
                        <b>R$ 0,00</b>
                    </Text>
                </Flex>

                <Flex justifyContent={'space-between'}>
                    <Text fontSize={'md'}>Total à prazo: </Text>
                    <Flex
                        direction={'column'}
                        alignItems={'flex-end'}
                    >
                        <Text fontSize={'lg'}>
                            <b>
                                {PriceFormat(
                                    (totalValue * 5) / 100 + totalValue
                                )}
                            </b>
                        </Text>
                        <Center>
                            <Text fontSize={'sm'}>
                                Em até 3x de{' '}
                                {PriceFormat(
                                    ((totalValue * 5) / 100 + totalValue) / 3
                                )}
                            </Text>
                        </Center>
                    </Flex>
                </Flex>
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
                                fontSize={'3xl'}
                                fontWeight={'extrabold'}
                            >
                                <b>{PriceFormat(totalValue)}</b>
                            </Text>
                        </Center>
                        <Center>
                            <Text>
                                Economia de <b>5%</b>
                            </Text>
                        </Center>
                    </Box>
                    <Button
                        p="7"
                        colorScheme="purple"
                        onClick={() => (location.href = '/identification')}
                    >
                        <Text
                            fontSize={['xl']}
                            fontWeight={'bold'}
                            textTransform={'uppercase'}
                        >
                            Finalizar compra
                        </Text>
                    </Button>
                    <Button
                        p="7"
                        variant={'outline'}
                        colorScheme={'purple'}
                        onClick={() => (location.href = '/shop')}
                    >
                        <Text
                            fontSize={['xl']}
                            fontWeight={'bold'}
                            textTransform={'uppercase'}
                        >
                            Continuar comprando
                        </Text>
                    </Button>
                </Stack>
            </Flex>
        </Box>
    );
};
export default Summary;
