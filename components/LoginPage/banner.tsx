import { Flex, Box, Text, Stack, useMediaQuery, Button } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

const BannerLogin = () => {
    const [isLargerThan500] = useMediaQuery('(min-width: 500px)')

    return (
        <Box
            w={[0, '60%']}
            height={'90vh'}
            maxH="800px"
            bg={'rgba(76, 10, 117, 1)'}
            bgGradient={
                'linear(to bottom right, rgba(24, 20, 235, 0.4) 0%, #620a9c 100%)'
            }
            borderRadius={[
                '0.5em 0 0 0.5em',
                '1em 0 0 1em',
                '1.5em 0 0 1.5em',
                '2em 0 0 2em',
            ]}
        >
            {isLargerThan500 ? (
                <Flex
                    w="100%"
                    flexDirection={'column'}
                    h="90vh"
                    maxH="800px"
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
                            w="60%"
                            h="auto"
                            maxH="700px"
                        >
                            <Text
                                fontWeight={'bold'}
                                fontSize={'54px'}
                                color="whiteAlpha.900"
                            >
                                Bem vindo
                            </Text>
                            <Text
                                fontWeight={'medium'}
                                fontSize={'16px'}
                                color="whiteAlpha.900"
                            >
                                Realize o login para continuar navegando.
                            </Text>
                            <Button
                                type="button"
                                w="100%"
                                p="6"
                                borderRadius={'25'}
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
                        height={'100%'}
                        alt="User Maker"
                    />
                </Flex>
            ) : null}
        </Box>
    )
}
export default BannerLogin
