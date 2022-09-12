import {
    Center,
    Box,
    Text,
    Input,
    Stack,
    Button,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'

import { useState } from 'react'

import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

import { checkEmail } from '../../utils/checkEmail'

import { toast, ToastContainer } from 'react-toastify'

type SignInProps = {
    email: string
    password: string
}

const SignInLogin = () => {
    const { register, handleSubmit, reset } = useForm<SignInProps>()

    const [show, setShow] = useState(false)
    const [notEmail, setNotEmail] = useState(false)

    if (notEmail) {
        toast.error('E-mail inválido')
    }

    function handleSignIn(data: SignInProps) {
        reset()

        const { email, password } = data

        const check = checkEmail(email)
        setNotEmail(!check)
        //fazer função de enviar para o backend
    }

    return (
        <Center
            w={['100%', '50%', '40%']}
            minH={['15em', '20em']}
        >
            <ToastContainer />
            <Box w="80%" h='auto'>
                <Text
                    fontSize={'48px'}
                    fontWeight={'bold'}
                >
                    Entrar
                </Text>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <Stack spacing={[3, 5]}>
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
                            <InputGroup size="md">
                                <Input
                                    {...register('password', {
                                        required: true,
                                    })}
                                    letterSpacing={'0.2em'}
                                    variant="flushed"
                                    type={show ? 'text' : 'password'}
                                    focusBorderColor="#8816CE"
                                    borderColor={'#8816CE'}
                                    borderBottom={'2px'}
                                />
                                <InputRightElement width="4.5rem">
                                    <Button
                                        bg="transparent"
                                        _hover={{ bg: 'transparent' }}
                                        _active={{ bg: 'transparent' }}
                                        _focus={{ bg: 'transparent' }}
                                        h="1.75rem"
                                        size="sm"
                                        onClick={() => setShow(!show)}
                                    >
                                        {show ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                        <Button
                            w="100%"
                            p="6"
                            borderRadius={'0'}
                            type="submit"
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
                </form>
                <Center m="4">
                    <Text color="#808080"> Ou Entre com sua rede social</Text>
                </Center>
                
                    <Button
                        w={["50%","100%"]}
                        p="6"
                        my='1'
                        borderRadius={'0'}
                        colorScheme="red"
                        leftIcon={<FaGoogle />}
                    >
                        <Text color="white">Google</Text>
                    </Button>
                    <Button
                        w={["50%","100%"]}
                        p="6"
                        my='1'
                        borderRadius={'0'}
                        colorScheme="facebook"
                        leftIcon={<FaFacebook />}
                    >
                        <Text color="white">Facebook</Text>
                    </Button>
               
            </Box>
        </Center>
    )
}
export default SignInLogin
