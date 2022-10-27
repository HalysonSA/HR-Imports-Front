import Layout from '../components/Layout/Layout';
import StatusBar from '../components/Cart/cartcomponents/statusBar';
import CartItems from '../components/Cart/cartcomponents/cartItems';

import { useForm } from 'react-hook-form';

import {
    Box,
    Input,
    Select,
    Center,
    Button,
    Stack,
    HStack,
    FormControl,
    FormLabel,
    Text,
    Spinner,
    Flex,
} from '@chakra-ui/react';

import InputMask from 'react-input-mask';

import validatePhone from '../utils/checkPhoneNumber';
import verifyString from '../utils/checkString';

import { useEffect, useState } from 'react';

const stateCode = [
    { name: 'Acre', code: 'AC' },
    { name: 'Alagoas', code: 'AL' },
    { name: 'Amapá', code: 'AP' },
    { name: 'Amazonas', code: 'AM' },
    { name: 'Bahia', code: 'BA' },
    { name: 'Ceará', code: 'CE' },
    { name: 'Distrito Federal', code: 'DF' },
    { name: 'Espírito Santo', code: 'ES' },
    { name: 'Goiás', code: 'GO' },
    { name: 'Maranhão', code: 'MA' },
    { name: 'Mato Grosso', code: 'MT' },
    { name: 'Mato Grosso do Sul', code: 'MS' },
    { name: 'Minas Gerais', code: 'MG' },
    { name: 'Pará', code: 'PA' },
    { name: 'Paraíba', code: 'PB' },
    { name: 'Paraná', code: 'PR' },
    { name: 'Pernambuco', code: 'PE' },
    { name: 'Piauí', code: 'PI' },
    { name: 'Rio de Janeiro', code: 'RJ' },
    { name: 'Rio Grande do Norte', code: 'RN' },
    { name: 'Rio Grande do Sul', code: 'RS' },
    { name: 'Rondônia', code: 'RO' },
    { name: 'Roraima', code: 'RR' },
    { name: 'Santa Catarina', code: 'SC' },
    { name: 'São Paulo', code: 'SP' },
    { name: 'Sergipe', code: 'SE' },
    { name: 'Tocantins', code: 'TO' },
];

type Localization = {
    cep: string;
    localidade: string;
    uf: string;
    logradouro: string;
    bairro: string;
    complemento: string;
};

type FormData = {
    prop: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    complement: string;
    neighborhood: string;
    number: number;
    state: string;
    telephone: string;
    zipcode: string;
};

const Identification = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        criteriaMode: 'all',
    });

    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState<Boolean>(false);
    const [zipCode, setZipCode] = useState('');
    const [localization, setLocalization] = useState<Localization>();

    const onSubmit = (data: FormData) => {
        const {
            firstName,
            lastName,
            address,
            city,
            complement,
            neighborhood,
            number,
            state,
            telephone,
            zipcode,
        } = data;

        const telephoneIsValid = validatePhone(telephone);
    };

    useEffect(() => {
        setLoading(true);
        async function getLocalization() {
            try {
                const response = await fetch(
                    `https://viacep.com.br/ws/${zipCode}/json/`,
                    {
                        method: 'GET',
                        headers: {
                            accept: 'application/json',
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }

                const result = await response.json();
                setLocalization(result);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        }

        getLocalization();
    }, [search]);

    return (
        <Layout>
            <Center m="5">
                <StatusBar />
            </Center>
            <Flex
                direction={['column', 'column', 'row']}
                gap={5}
            >
                <Box w={['100%', '100%', '85%', '75%']} mb={5}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={3}>
                            <Stack>
                                <Text
                                    fontWeight={'bold'}
                                    fontSize={'3xl'}
                                    textTransform={'uppercase'}
                                >
                                    Entrega
                                </Text>
                                <HStack>
                                    <Input
                                        focusBorderColor="purple.400"
                                        placeholder="CEP"
                                        type="text"
                                        as={InputMask}
                                        mask="99999-999"
                                        onChange={(e) => {
                                            setZipCode(e.target.value);
                                        }}
                                    />
                                    <Button
                                        minW={'100px'}
                                        colorScheme={'purple'}
                                        onClick={() => setSearch(!search)}
                                    >
                                        {loading ? (
                                            <Spinner color="white" />
                                        ) : (
                                            'Buscar'
                                        )}
                                    </Button>
                                </HStack>
                            </Stack>

                            <Stack>
                                <Text
                                    fontWeight={'bold'}
                                    fontSize={'3xl'}
                                    textTransform={'uppercase'}
                                >
                                    Dados do Destinatário
                                </Text>
                                <FormControl id="name">
                                    <FormLabel>Nome</FormLabel>
                                    <Input
                                        type="text"
                                        focusBorderColor="purple.400"
                                        {...register('firstName', {
                                            required:
                                                'Este campo é obrigatório',
                                        })}
                                    />
                                    {errors.firstName && (
                                        <Text
                                            p={'1'}
                                            _before={{
                                                content: '"⚠"',
                                            }}
                                            color={'red'}
                                        >
                                            {errors.firstName.message}
                                        </Text>
                                    )}
                                </FormControl>
                                <FormControl id="lastname">
                                    <FormLabel>Sobrenome</FormLabel>
                                    <Input
                                        type="text"
                                        focusBorderColor="purple.400"
                                        {...register('lastName', {
                                            required:
                                                'Este campo é obrigatório',
                                        })}
                                    />
                                    {errors.lastName && (
                                        <Text
                                            p={'1'}
                                            _before={{
                                                content: '"⚠"',
                                            }}
                                            color={'red'}
                                        >
                                            {errors.lastName.message}
                                        </Text>
                                    )}
                                </FormControl>
                                <FormControl id="telephone">
                                    <FormLabel>Telefone</FormLabel>
                                    <Input
                                        type="text"
                                        focusBorderColor="purple.400"
                                        as={InputMask}
                                        mask="(99) 99999-9999"
                                        {...register('telephone', {
                                            required:
                                                'Este campo é obrigatório',
                                        })}
                                    />
                                    {errors.telephone && (
                                        <Text
                                            p={'1'}
                                            _before={{
                                                content: '"⚠"',
                                            }}
                                            color={'red'}
                                        >
                                            {errors.telephone.message}
                                        </Text>
                                    )}
                                </FormControl>
                            </Stack>
                            <Stack>
                                <Text
                                    fontWeight={'bold'}
                                    fontSize={'3xl'}
                                    textTransform={'uppercase'}
                                >
                                    Endereço do Destinatário
                                </Text>
                                <FormControl id="telephone">
                                    <FormLabel>Endereço</FormLabel>
                                    <Input
                                        type="text"
                                        focusBorderColor="purple.400"
                                        {...register('address', {
                                            required:
                                                'Este campo é obrigatório',
                                        })}
                                    />
                                    {errors.address && (
                                        <Text
                                            p={'1'}
                                            _before={{
                                                content: '"⚠"',
                                            }}
                                            color={'red'}
                                        >
                                            {errors.address.message}
                                        </Text>
                                    )}
                                </FormControl>
                                <HStack>
                                    <FormControl id="number">
                                        <FormLabel>Número</FormLabel>

                                        <Input
                                            type="number"
                                            focusBorderColor="purple.400"
                                            {...register('number', {
                                                required:
                                                    'Este campo é obrigatório',
                                            })}
                                        />
                                        {errors.number && (
                                            <Text
                                                p={'1'}
                                                _before={{
                                                    content: '"⚠"',
                                                }}
                                                color={'red'}
                                            >
                                                {errors.number.message}
                                            </Text>
                                        )}
                                    </FormControl>
                                    <FormControl id="complement">
                                        <FormLabel>Complemento</FormLabel>

                                        <Input
                                            type="text"
                                            focusBorderColor="purple.400"
                                            {...register('complement')}
                                        />
                                    </FormControl>
                                </HStack>
                                <FormControl id="city">
                                    <FormLabel>Cidade</FormLabel>

                                    <Input
                                        type="text"
                                        focusBorderColor="purple.400"
                                        defaultValue={localization?.localidade}
                                        {...register('city', {
                                            required:
                                                'Este campo é obrigatório',
                                        })}
                                    />
                                    {errors.city && (
                                        <Text
                                            p={'1'}
                                            _before={{
                                                content: '"⚠"',
                                            }}
                                            color={'red'}
                                        >
                                            {errors.city.message}
                                        </Text>
                                    )}
                                </FormControl>
                                <FormControl id="neighborhood">
                                    <FormLabel>Bairro</FormLabel>

                                    <Input
                                        type="text"
                                        focusBorderColor="purple.400"
                                        defaultValue={localization?.bairro}
                                        {...register('neighborhood', {
                                            required:
                                                'Este campo é obrigatório',
                                        })}
                                    />
                                    {errors.neighborhood && (
                                        <Text
                                            p={'1'}
                                            _before={{
                                                content: '"⚠"',
                                            }}
                                            color={'red'}
                                        >
                                            {errors.neighborhood.message}
                                        </Text>
                                    )}
                                </FormControl>

                                <HStack>
                                    <FormControl id="state">
                                        <FormLabel>CEP</FormLabel>
                                        <Input
                                            type="text"
                                            focusBorderColor="purple.400"
                                            defaultValue={localization?.cep}
                                            as={InputMask}
                                            mask="99999-999"
                                            {...register('zipcode', {
                                                required:
                                                    'Este campo é obrigatório',
                                            })}
                                        />
                                        {errors.zipcode && (
                                            <Text
                                                p={'1'}
                                                _before={{
                                                    content: '"⚠"',
                                                }}
                                                color={'red'}
                                            >
                                                {errors.zipcode.message}
                                            </Text>
                                        )}
                                    </FormControl>
                                    <FormControl id="state">
                                        <FormLabel>Estado</FormLabel>
                                        <Select
                                            {...register('state', {
                                                required:
                                                    'Este campo é obrigatório',
                                            })}
                                            focusBorderColor="purple.400"
                                            value={localization?.uf}
                                            placeholder="Selecione um estado"
                                        >
                                            {stateCode.map((state) => (
                                                <>
                                                    <option
                                                        key={state.code}
                                                        value={state.code}
                                                    >
                                                        {state.name}
                                                    </option>
                                                </>
                                            ))}
                                        </Select>
                                        {errors.state && (
                                            <Text
                                                p={'1'}
                                                _before={{
                                                    content: '"⚠"',
                                                }}
                                                color={'red'}
                                            >
                                                {errors.state.message}
                                            </Text>
                                        )}
                                    </FormControl>
                                </HStack>
                            </Stack>

                            <Button
                                type="submit"
                                colorScheme={'purple'}
                                textTransform={'uppercase'}
                                fontSize={'xl'}
                            >
                                Continuar
                            </Button>
                        </Stack>
                    </form>
                </Box>
                <CartItems />
            </Flex>
        </Layout>
    );
};
export default Identification;
