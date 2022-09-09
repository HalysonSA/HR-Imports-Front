import { Center, Box, Text, Input, Stack, Button } from '@chakra-ui/react'

import { useForm } from 'react-hook-form'

import { FaFacebook, FaGoogle } from 'react-icons/fa'

type SignInProps = {
    email: string
    password: string
}

const SignInLogin = () => {
    const { register, handleSubmit } = useForm<SignInProps>()

    function handleSignIn(data: SignInProps) {
        console.log(data)
    }

    return (
        <Center
            w={['100%', '50%', '40%']}
            minH={['15em', '20em']}
            h="auto"
        >
            <Box
                w="80%"
                h="auto"
            >
                <Text
                    fontSize={'48px'}
                    fontWeight={'bold'}
                >
                    Entrar
                </Text>
                <Stack spacing={[5, 8]}>
                    <Box>
                        <Text color="#808080">Email</Text>
                        <Input
                            {...register('email', { required: true })}
                            type="email"
                            variant={'flushed'}
                            focusBorderColor="#8816CE"
                            borderColor={'#8816CE'}
                            borderBottom={'2px'}
                        />
                    </Box>
                    <Box>
                        <Text color="#808080">Senha</Text>
                        <Input
                            {...register('password', { required: true })}
                            letterSpacing={'0.2em'}
                            type={'password'}
                            variant="flushed"
                            focusBorderColor="#8816CE"
                            borderColor={'#8816CE'}
                            borderBottom={'2px'}
                        />
                    </Box>
                    <Button
                        w="100%"
                        p="6"
                        borderRadius={'0'}
                        onClick={handleSubmit(handleSignIn)}
                        bgGradient={
                            'linear(270deg, #CE8DF5 8.33%, #6B13B0 100%)'
                        }
                        _hover={{
                            bgGradient:
                                'linear(270deg, #CE8DF5 8.33%, #6B13B0 100%)',
                        }}
                        _focus={{
                            bgGradient:
                                'linear(270deg, #6B13B0 8.33%, #CE8DF5 100%)',
                        }}
                    >
                        <Text color="white">Entrar</Text>
                    </Button>
                </Stack>
                <Center m="5">
                    <Text color="#808080"> Ou Entre com sua rede social</Text>
                </Center>
                <Stack>
                    <Button
                        w="100%"
                        p="6"
                        borderRadius={'0'}
                        colorScheme="red"
                        leftIcon={<FaGoogle />}
                    >
                        <Text color="white">Google</Text>
                    </Button>
                    <Button
                        w="100%"
                        p="6"
                        borderRadius={'0'}
                        colorScheme="facebook"
                        leftIcon={<FaFacebook />}
                    >
                        <Text color="white">Facebook</Text>
                    </Button>
                </Stack>
            </Box>
        </Center>
    )
}
export default SignInLogin
