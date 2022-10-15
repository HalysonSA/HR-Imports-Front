import {
    Button,
    Box,
    Flex,
    Text,
    HStack,
    Stack,
    Center,
} from '@chakra-ui/react';
import { AiOutlineFileSearch } from 'react-icons/ai';

const Summary = () => {
    return (
        <Box
            w={['100%', '100%', '35%','25%']}
            maxW={'450px'}
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
                        fontWeight={'extrabold'}
                        textTransform={'uppercase'}
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
                            fontSize={['xl']}
                            fontWeight={'bold'}
                            textTransform={'uppercase'}
                        >
                            Finalizar compra
                        </Text>
                    </Button>
                    <Button
                        variant={'outline'}
                        colorScheme={'purple'}
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
