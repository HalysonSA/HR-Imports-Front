import {
    Box,
    Button,
    Flex,
    Stack,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const BannerLogin = () => {
    const [isLargerThan500] = useMediaQuery('(min-width: 500px)');

    return (
        <Box
            h={'100vh'}
            w={[0, '60%']}
            bg={'rgba(76, 10, 117, 1)'}
            bgGradient={
                'linear(to bottom right, rgba(24, 20, 235, 0.4) 0%, #620a9c 100%)'
            }
        >
            {isLargerThan500 ? (
                <Flex
                    w="100%"
                    flexDirection={'column'}
                    h="100vh"
                    maxH="900px"
                >
                    <Box
                        zIndex={99}
                        position={'absolute'}
                        ml="3em"
                        w={['50%', '40%', '30%']}
                        top={'25%'}
                    >
                        <Stack
                            spacing={3}
                            w="100%"
                            h="auto"
                            maxH="700px"
                            color="whiteAlpha.900"
                            wordBreak={'break-word'}
                        >
                            <Text
                                fontWeight={'bold'}
                                fontSize={'54px'}
                            >
                                Bem vindo
                            </Text>
                            <Text
                                fontWeight={'medium'}
                                fontSize={'16px'}
                            >
                                Realize o login para continuar navegando.
                            </Text>
                            <Button
                                variant={'outline'}
                                colorScheme={'whiteAlpha.900'}
                                minW={'100px'}
                                w="50%"
                                p="6"
                                borderRadius={'25'}
                                fontWeight={'bold'}
                            >
                                <Link href="/register">Cadastre-se</Link>
                            </Button>
                        </Stack>
                    </Box>
                    <Image
                        src="/UserMaker.svg"
                        objectFit="fill"
                        layout="responsive"
                        width={'100%'}
                        height={'768px'}
                        alt=""
                    />
                </Flex>
            ) : null}
        </Box>
    );
};
export default BannerLogin;
