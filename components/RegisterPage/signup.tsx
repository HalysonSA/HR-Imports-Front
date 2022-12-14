import {
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Spinner,
    Stack,
    Text,
} from '@chakra-ui/react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { useDispatch } from 'react-redux';

import { toast, ToastContainer } from 'react-toastify';
import ValidateCPF from '../../utils/checkCpf';
import { checkEmail } from '../../utils/checkEmail';
import { passwordMatch } from '../../utils/checkPassword';
import { GetUser } from '../../utils/checkUser';
import api from '../api/axios';
import { signInUser } from '../Redux/UserSlice';

type User = {
    first_name: string;
    last_name: string;
    email: string;
    cpf: string;
    telephone: string;
    password: string;
    confirmPassword: string;
    token: string;
};

const SignUpRegister = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [cpfIsValid, setCpfIsValid] = useState(true);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<User>();

    function handleSignUp(data: User) {
        setIsLoading(true);

        const { password, confirmPassword, email, cpf } = data;

        const emailIsValid = checkEmail(email);
        const match = passwordMatch(password, confirmPassword);
        const cpfIsValid = ValidateCPF(cpf);

        setEmailIsValid(emailIsValid);
        setPasswordIsValid(match);
        setCpfIsValid(cpfIsValid);

        const getUserByNewUser = async () => {
            const user = await GetUser({ email, password });
            user && dispatch(signInUser(user));
            window.location.href = '/';
        };

        if (emailIsValid && match) {
            api.post('/users', data)
                .then(() => {
                    setIsLoading(false);
                    reset();
                    getUserByNewUser();
                })
                .catch((error) => {
                    toast.error(error.response.data);
                    setIsLoading(false);
                    reset();
                });
        } else {
            setIsLoading(false);
        }
    }

    return (
        <Center
            bg="white"
            py="3"
            w={['100%', '70%', '60%', '40%']}
            minH={['15em', '20em']}
        >
            <ToastContainer />
            <Stack
                w={['90%', '80%']}
                maxW="700px"
                h="auto"
            >
                <Text
                    fontSize={'48px'}
                    fontWeight={'bold'}
                >
                    Cadastre-se
                </Text>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <Stack spacing={4}>
                        <HStack>
                            <FormControl id="first_name">
                                <FormLabel>Nome</FormLabel>
                                <Input
                                    focusBorderColor="purple.500"
                                    type="text"
                                    {...register('first_name', {
                                        required: 'Este campo ?? obrigat??rio.',
                                        pattern: {
                                            value: /^[A-Za-z?????????????????????????????????????????????????????????????? ]+$/,
                                            message: 'N??o pode conter n??meros.',
                                        },
                                    })}
                                    size="lg"
                                />
                                {errors.first_name && (
                                    <Text
                                        p={'1'}
                                        _before={{
                                            content: '"???"',
                                        }}
                                        color={'red'}
                                    >
                                        {errors.first_name.message}
                                    </Text>
                                )}
                            </FormControl>
                            <FormControl id="last_name">
                                <FormLabel>Sobrenome</FormLabel>
                                <Input
                                    focusBorderColor="purple.500"
                                    type="text"
                                    {...register('last_name', {
                                        required: 'Este campo ?? obrigat??rio.',

                                        pattern: {
                                            value: /^[A-Za-z?????????????????????????????????????????????????????????????? ]+$/,
                                            message: 'N??o pode conter n??meros.',
                                        },
                                    })}
                                    size="lg"
                                />
                                {errors.last_name && (
                                    <Text
                                        p={'1'}
                                        _before={{
                                            content: '"???"',
                                        }}
                                        color={'red'}
                                    >
                                        {errors.last_name.message}
                                    </Text>
                                )}
                            </FormControl>
                        </HStack>

                        <FormControl id="email">
                            <FormLabel>E-mail</FormLabel>
                            <Input
                                focusBorderColor="purple.500"
                                type="email"
                                {...register('email', {
                                    required: 'Este campo ?? obrigat??rio.',
                                })}
                                size="lg"
                                required
                            />
                            {!emailIsValid && (
                                <Text
                                    p={'1'}
                                    _before={{
                                        content: '"???"',
                                    }}
                                    color={'red'}
                                >
                                    E-mail inv??lido.
                                </Text>
                            )}
                            {errors.email && (
                                <Text
                                    p={'1'}
                                    _before={{
                                        content: '"???"',
                                    }}
                                    color={'red'}
                                >
                                    {errors.email.message}
                                </Text>
                            )}
                        </FormControl>

                        <HStack>
                            <FormControl id="cpf">
                                <FormLabel>CPF</FormLabel>
                                <Input
                                    as={InputMask}
                                    mask="999.999.999-99"
                                    focusBorderColor="purple.500"
                                    type="text"
                                    {...register('cpf', {
                                        required: 'Este campo ?? obrigat??rio.',
                                        pattern: {
                                            value: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/g,
                                            message:
                                                'Por favor, digite o CPF no formato 000.000.000-00',
                                        },
                                    })}
                                    size="lg"
                                />
                                {!cpfIsValid && (
                                    <Text
                                        p={'1'}
                                        _before={{
                                            content: '"???"',
                                        }}
                                        color={'red'}
                                    >
                                        CPF inv??lido.
                                    </Text>
                                )}
                                {errors.cpf && (
                                    <Text
                                        p={'1'}
                                        _before={{
                                            content: '"???"',
                                        }}
                                        color={'red'}
                                    >
                                        {errors.cpf.message}
                                    </Text>
                                )}
                            </FormControl>
                            <FormControl id="telephone">
                                <FormLabel>Telefone</FormLabel>
                                <Input
                                    as={InputMask}
                                    mask="(99) 99999-9999"
                                    focusBorderColor="purple.500"
                                    type="text"
                                    {...register('telephone', {
                                        required: 'Este campo ?? obrigat??rio',
                                        pattern: {
                                            value: /^\([1-9]{2}\) [9]{1}[0-9]{4}\-[0-9]{4}$/,
                                            message:
                                                'Digite um telefone v??lido no formato (99) 99999-9999',
                                        },
                                    })}
                                    size="lg"
                                />
                                {errors.telephone && (
                                    <Text
                                        p={'1'}
                                        _before={{
                                            content: '"???"',
                                        }}
                                        color={'red'}
                                    >
                                        {errors.telephone.message}
                                    </Text>
                                )}
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl id="password">
                                <FormLabel>Senha</FormLabel>
                                <InputGroup size="lg">
                                    <Input
                                        focusBorderColor="purple.500"
                                        type={show ? 'text' : 'password'}
                                        {...register('password', {
                                            required:
                                                'Este campo ?? obrigat??rio.',
                                            minLength: {
                                                value: 6,
                                                message:
                                                    'A senha deve ter no m??nimo 6 caracteres.',
                                            },
                                        })}
                                    />
                                </InputGroup>
                                {errors.password && (
                                    <Text
                                        p={'1'}
                                        _before={{
                                            content: '"???"',
                                        }}
                                        color={'red'}
                                    >
                                        {errors.password.message}
                                    </Text>
                                )}
                            </FormControl>
                            <FormControl id="confirmPassword">
                                <FormLabel>Confirme sua senha</FormLabel>
                                <InputGroup size="lg">
                                    <Input
                                        focusBorderColor="purple.500"
                                        type={show ? 'text' : 'password'}
                                        size={'lg'}
                                        {...register('confirmPassword', {
                                            required:
                                                'Este campo ?? obrigat??rio.',
                                            minLength: {
                                                value: 6,
                                                message:
                                                    'A senha deve ter no m??nimo 6 caracteres.',
                                            },
                                        })}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button
                                            h={10}
                                            w={10}
                                            borderRadius={'25px'}
                                            colorScheme={'purple'}
                                            onClick={() => setShow(!show)}
                                        >
                                            {show ? (
                                                <ViewOffIcon />
                                            ) : (
                                                <ViewIcon />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                {!passwordIsValid && (
                                    <Text
                                        p={'1'}
                                        _before={{
                                            content: '"???"',
                                        }}
                                        color={'red'}
                                    >
                                        As senhas n??o coincidem.
                                    </Text>
                                )}

                                {errors.confirmPassword && (
                                    <Text
                                        p={'1'}
                                        _before={{
                                            content: '"???"',
                                        }}
                                        color={'red'}
                                    >
                                        {errors.confirmPassword.message}
                                    </Text>
                                )}
                            </FormControl>
                        </HStack>
                        <Flex justifyContent={'end'}>
                            <Button
                                type="submit"
                                colorScheme="purple"
                                size="lg"
                                borderRadius={'25px'}
                                w={['100%', '100%', '40%', '40%']}
                            >
                                {isLoading ? (
                                    <Spinner
                                        size="sm"
                                        color="white"
                                    />
                                ) : (
                                    'Salvar'
                                )}
                            </Button>
                        </Flex>
                    </Stack>
                </form>
            </Stack>
        </Center>
    );
};
export default SignUpRegister;
