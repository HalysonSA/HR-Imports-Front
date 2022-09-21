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

import { useDispatch } from 'react-redux'

//import { checkUser } from '../Redux/UserSlice'
import { checkEmail } from '../../utils/checkEmail'
import { passwordMatch } from '../../utils/checkPassword'

type User = {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    token: string
}

const SignUpRegister = () => {
    const dispatch = useDispatch()

    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

    const [show, setShow] = useState(false)

    const [notMatch, setNotMatch] = useState(false)
    const [notEmail, setNotEmail] = useState(false)

    const { register, handleSubmit, reset } = useForm<User>()

    function handleSignUp(data: User) {
        
        reset();

        const { password, confirmPassword, email } = data

        const emailIsValid = checkEmail(email)
        const match = passwordMatch(password, confirmPassword)

        setNotEmail(!emailIsValid)
        setNotMatch(!match)
        /*
        if (emailIsValid && match) {
            dispatch(checkUser(data))
        }*/
    }

    return (
        <Center
            borderRadius="lg"
            position={isLargerThan1280 ? 'relative' : 'absolute'}
            bg={isLargerThan1280 ? '#fff' : 'rgba(255, 255, 255, 0.8)'}
            py="3"
            minW={['0', '400px', '400px', '400px']}
            w={['92%', '50%', '40%']}
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
                   Cadastre-se
                </Text>
                <form onSubmit={handleSubmit(handleSignUp)}>
                <Stack spacing={[3, 4]}>
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
                        <Text
                            fontSize={'lg'}
                            color="white"
                        >
                            Confirmar
                        </Text>
                    </Button>
                    <Text
                        minH={'16px'}
                        fontSize={'sm'}
                        color="red"
                    >
                        {notMatch ? 'As Senhas não conferem' : null} <br />
                        {notEmail ? 'Email inválido' : null}
                    </Text>
                    <Button
                        borderRadius={'0'}
                        bg="transparent"
                        _hover={{ bg: 'transparent', color: 'purple.400' }}
                        _active={{ bg: 'transparent' }}
                        _focus={{ bg: 'transparent' }}
                        color="BLACK"
                    >
                        <Link href="/login">Já tenho uma conta</Link>
                    </Button>
                </Stack>
                </form>
            </Box>
        </Center>
    )
}
export default SignUpRegister
