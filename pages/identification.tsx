import Layout from '../components/Layout/Layout';
import StatusBar from '../components/Cart/cartcomponents/statusBar';

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
    const { register, handleSubmit } = useForm<FormData>();

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
            <Box>
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
                            <FormControl
                                id="name"
                                isRequired
                            >
                                <FormLabel>Nome</FormLabel>
                                <Input
                                    type="text"
                                    focusBorderColor="purple.400"
                                    {...register('firstName', {
                                        required: true,
                                    })}
                                />
                            </FormControl>
                            <FormControl
                                id="lastname"
                                isRequired
                            >
                                <FormLabel>Sobrenome</FormLabel>
                                <Input
                                    type="text"
                                    focusBorderColor="purple.400"
                                    {...register('lastName', {
                                        required: true,
                                    })}
                                />
                            </FormControl>
                            <FormControl
                                id="telephone"
                                isRequired
                            >
                                <FormLabel>Telefone</FormLabel>
                                <Input
                                    type="text"
                                    focusBorderColor="purple.400"
                                    as={InputMask}
                                    mask="(99) 99999-9999"
                                    {...register('telephone', {
                                        required: true,
                                    })}
                                />
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
                            <FormControl
                                id="telephone"
                                isRequired
                            >
                                <FormLabel>Endereço</FormLabel>
                                <Input
                                    type="text"
                                    focusBorderColor="purple.400"
                                    {...register('address', { required: true })}
                                />
                            </FormControl>
                            <HStack>
                                <FormControl
                                    id="number"
                                    isRequired
                                >
                                    <FormLabel>Número</FormLabel>

                                    <Input
                                        type="number"
                                        focusBorderColor="purple.400"
                                        {...register('number', {
                                            required: true,
                                        })}
                                    />
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
                            <FormControl
                                id="city"
                                isRequired
                            >
                                <FormLabel>Cidade</FormLabel>

                                <Input
                                    type="text"
                                    focusBorderColor="purple.400"
                                    defaultValue={localization?.localidade}
                                    {...register('city', { required: true })}
                                />
                            </FormControl>
                            <FormControl
                                id="neighborhood"
                                isRequired
                            >
                                <FormLabel>Bairro</FormLabel>

                                <Input
                                    type="text"
                                    focusBorderColor="purple.400"
                                    defaultValue={localization?.bairro}
                                    {...register('neighborhood', {
                                        required: true,
                                    })}
                                />
                            </FormControl>

                            <HStack>
                                <FormControl
                                    id="state"
                                    isRequired
                                >
                                    <FormLabel>CEP</FormLabel>
                                    <Input
                                        type="text"
                                        focusBorderColor="purple.400"
                                        defaultValue={localization?.cep}
                                        as={InputMask}
                                        mask="99999-999"
                                        {...register('zipcode', {
                                            required: true,
                                        })}
                                    />
                                </FormControl>
                                <FormControl
                                    id="state"
                                    isRequired
                                >
                                    <FormLabel>Estado</FormLabel>
                                    <Select
                                        {...register('state', {
                                            required: true,
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
        </Layout>
    );
};
export default Identification;
