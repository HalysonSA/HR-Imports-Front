import {
    Center,
    Box,
    Text,
    Input,
    Stack,
    Button,
    InputGroup,
    InputRightElement,
    useMediaQuery,
} from '@chakra-ui/react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

import Link from 'next/link'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

type SignUpFormData = {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}

const SignUpRegister = () => {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
    const [show, setShow] = useState(false)

    const { register, handleSubmit } = useForm<SignUpFormData>()

    function handleSignUp(data: SignUpFormData) {
        console.log(data)
    }

    return (
        <Center
            borderRadius="lg"
            bg={isLargerThan1280 ? '#fff' : 'rgba(255, 255, 255, 0.8)'}
            py="5"
            minW={['0', '400px', '400px', '400px']}
            w={['100%', '50%', '40%']}
            minH={['15em', '20em']}
            h="auto"
        >
            <Box
                w={['90%', '80%']}
                h="auto"
            >
                <Text
                    fontSize={'48px'}
                    fontWeight={'bold'}
                >
                    Registre-se
                </Text>
                <Stack spacing={[3, 5]}>
                    <Box>
                        <Text color="#808080">Nome</Text>
                        <Input
                            type="text"
                            {...register('firstName')}
                            variant={'flushed'}
                            focusBorderColor="#8816CE"
                            borderColor={'#8816CE'}
                            borderBottom={'2px'}
                        />
                    </Box>
                    <Box>
                        <Text color="#808080">Sobrenome</Text>
                        <Input
                            type="text"
                            {...register('lastName')}
                            variant={'flushed'}
                            focusBorderColor="#8816CE"
                            borderColor={'#8816CE'}
                            borderBottom={'2px'}
                        />
                    </Box>
                    <Box>
                        <Text color="#808080">Email</Text>
                        <Input
                            type="email"
                            {...register('email', { required: true })}
                            variant={'flushed'}
                            focusBorderColor="#8816CE"
                            borderColor={'#8816CE'}
                            borderBottom={'2px'}
                        />
                    </Box>
                    <Box>
                        <Text color="#808080">Senha</Text>
                        <Input
                            {...register('password', {
                                required: true,
                            })}
                            letterSpacing={'0.2em'}
                            type={show ? 'text' : 'password'}
                            variant="flushed"
                            focusBorderColor="#8816CE"
                            borderColor={'#8816CE'}
                            borderBottom={'2px'}
                        />
                    </Box>
                    <Box>
                        <Text color="#808080">Confirme sua senha</Text>

                        <InputGroup size="md">
                            <Input
                                {...register('confirmPassword', {
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
                        onClick={handleSubmit(handleSignUp)}
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
                        <Text
                            fontSize={'2xl'}
                            color="white"
                        >
                            Confirmar
                        </Text>
                    </Button>
                    <Button
                        borderRadius={'0'}
                        bg="transparent"
                        _hover={{ bg: 'transparent', color: 'purple.400' }}
                        _active={{ bg: 'transparent' }}
                        _focus={{ bg: 'transparent' }}
                        color="BLACK"
                    >
                        <Link href="/ ">Já tenho uma conta</Link>
                    </Button>
                </Stack>
            </Box>
        </Center>
    )
}
export default SignUpRegister
