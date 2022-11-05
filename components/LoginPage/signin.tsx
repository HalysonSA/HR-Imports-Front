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
    CircularProgress,
} from '@chakra-ui/react';

import { toast, ToastContainer } from 'react-toastify';

import { useForm } from 'react-hook-form';

import { useState } from 'react';

import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { useRouter } from 'next/router';

import { signIn } from 'next-auth/react';

import GetUser from '../../utils/checkUser';

import { useDispatch } from 'react-redux';
import { signInUser } from '../../components/Redux/UserSlice';

type SignInProps = {
    email: string;
    password: string;
};

const SignInLogin = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [isLargerThan500] = useMediaQuery('(min-width: 500px)');

    const { register, handleSubmit, reset } = useForm<SignInProps>();

    const [show, setShow] = useState(false);
    const [isLoading, setLoading] = useState(false);

    async function handleSignIn({ email, password }: SignInProps) {
        setLoading(true);

        const user = await GetUser({ email, password });

        user &&
            (dispatch(signInUser(user))
                ? router.push('/')
                : toast.error('Email ou senha incorretos'));

        setLoading(false);
        reset();
    }

    return (
        <Center
            w={['100%', '50%', '40%']}
            minH={['15em', '20em']}
        >
            <ToastContainer />
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
                            borderRadius={'25'}
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
                            <Text color="white">
                                {isLoading ? (
                                    <CircularProgress
                                        size="30"
                                        isIndeterminate
                                        color="purple.400"
                                    />
                                ) : (
                                    'Entrar'
                                )}
                            </Text>
                        </Button>
                    </Stack>
                </form>

                {isLargerThan500 ? null : (
                    <Button
                        w="100%"
                        p="6"
                        my="1"
                        borderRadius={'25'}
                        colorScheme="purple"
                        onClick={() => router.push('/register')}
                    >
                        <Text color="black">Cadastre-se</Text>
                    </Button>
                )}
                <Center m="4">
                    <Text color="#808080"> Ou Entre com sua rede social</Text>
                </Center>
                <Button
                    w={['50%', '100%']}
                    p="6"
                    my="1"
                    borderRadius={'25'}
                    colorScheme="red"
                    onClick={() => signIn('google')}
                    leftIcon={<FaGoogle />}
                >
                    <Text color="white">Google</Text>
                </Button>
                <Button
                    w={['50%', '100%']}
                    p="6"
                    my="1"
                    borderRadius={'25'}
                    onClick={() => signIn('facebook')}
                    colorScheme="facebook"
                    leftIcon={<FaFacebook />}
                >
                    <Text color="white">Facebook</Text>
                </Button>
            </Box>
        </Center>
    );
};
export default SignInLogin;
