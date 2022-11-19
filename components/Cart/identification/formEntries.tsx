import validateCPF from '../../../utils/checkCpf';

import {
    Input,
    Select,
    Button,
    Stack,
    HStack,
    FormControl,
    FormLabel,
    Text,
    Spinner,
    Box,
} from '@chakra-ui/react';

import InputMask from 'react-input-mask';
import { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { toast, ToastContainer } from 'react-toastify';

import { CustomerContext } from '../../../context/customer';
import { checkEmail } from '../../../utils/checkEmail';

type UserInfo = {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    accountType?: string | undefined;
    status?: string | undefined;
};

type UserType = {
    user: UserInfo;
};

type LoadingType = {
    isLoading: Boolean;
};

type Localization = {
    cep: string;
    localidade: string;
    uf: string;
    logradouro: string;
    bairro: string;
    complemento: string;
};

type FormData = {
    cpf: string;
    cep: string;
    first_name: string;
    last_name: string;
    email: string;
    street_name: string;
    street_number: string;
    city: string;
    complement: string;
    neighborhood: string;
    federal_unit: string;
    telephone: string;
    zip_code: string;
};

const FormEntries = () => {
    const [itsLoading, setLoading] = useState(false);
    const [search, setSearch] = useState<boolean>(false);
    const [zipCode, setZipCode] = useState('');
    const [localization, setLocalization] = useState<Localization>();

    const { handleCustomer } = useContext(CustomerContext);

    const router = useRouter();

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

    const {
        setValue,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        criteriaMode: 'all',
    });
    useEffect(() => {
        async function getLocalization() {
            setLoading(true);
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
                !result.erro && setLocalization(result);
                result.erro &&
                    toast.error('CEP não encontrado', {
                        position: 'top-center',
                    });
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        }

        getLocalization();
    }, [search]);

    const onSubmit = (data: FormData) => {
        setLoading(true);

        const { cpf, email } = data;

        if (validateCPF(cpf) && checkEmail(email)) {
            setLoading(true);
            handleCustomer(data);
            router.push('/payment');
        } else {
            setLoading(false);
            toast.error('CPF ou E-mail inválido');
        }
    };
    localization &&
        (setValue('city', localization.localidade),
        setValue('federal_unit', localization.uf),
        setValue('zip_code', localization.cep));

    return (
        <Box mb={5}>
            <ToastContainer />

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
                                {itsLoading ? (
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
                            Endereço do Destinatário
                        </Text>
                        <FormControl id="telephone">
                            <FormLabel>Endereço</FormLabel>
                            <Input
                                type="text"
                                focusBorderColor="purple.400"
                                {...register('street_name', {
                                    required: 'Este campo é obrigatório.',

                                    pattern: {
                                        value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
                                        message: 'Não pode conter números.',
                                    },
                                })}
                            />
                            {errors.street_name && (
                                <Text
                                    p={'1'}
                                    _before={{
                                        content: '"⚠"',
                                    }}
                                    color={'red'}
                                >
                                    {errors.street_name.message}
                                </Text>
                            )}
                        </FormControl>
                        <HStack>
                            <FormControl id="number">
                                <FormLabel>Número</FormLabel>

                                <Input
                                    type="number"
                                    focusBorderColor="purple.400"
                                    {...register('street_number', {
                                        required: 'Este campo é obrigatório.',
                                    })}
                                />
                                {errors.street_number && (
                                    <Text
                                        p={'1'}
                                        _before={{
                                            content: '"⚠"',
                                        }}
                                        color={'red'}
                                    >
                                        {errors.street_number.message}
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
                                variant={
                                    localization?.localidade
                                        ? 'filled'
                                        : 'outline'
                                }
                                focusBorderColor="purple.400"
                                defaultValue={localization?.localidade}
                                {...register('city', {
                                    required: 'Este campo é obrigatório.',

                                    pattern: {
                                        value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
                                        message: 'Não pode conter números.',
                                    },
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
                                variant={'outline'}
                                type="text"
                                focusBorderColor="purple.400"
                                defaultValue={localization?.bairro}
                                {...register('neighborhood', {
                                    required: 'Este campo é obrigatório.',

                                    pattern: {
                                        value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
                                        message: 'Não pode conter números.',
                                    },
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
                                    variant={
                                        localization?.cep ? 'filled' : 'outline'
                                    }
                                    focusBorderColor="purple.400"
                                    defaultValue={localization?.cep.replace(
                                        '-',
                                        ''
                                    )}
                                    as={InputMask}
                                    mask="99999-999"
                                    {...register('zip_code', {
                                        required: 'Este campo é obrigatório',
                                    })}
                                />
                                {errors.zip_code && (
                                    <Text
                                        p={'1'}
                                        _before={{
                                            content: '"⚠"',
                                        }}
                                        color={'red'}
                                    >
                                        {errors.zip_code.message}
                                    </Text>
                                )}
                            </FormControl>
                            <FormControl id="state">
                                <FormLabel>Estado</FormLabel>
                                <Select
                                    {...register('federal_unit', {
                                        required: 'Este campo é obrigatório',
                                    })}
                                    variant={
                                        localization?.uf ? 'filled' : 'outline'
                                    }
                                    focusBorderColor="purple.400"
                                    defaultValue={localization?.uf}
                                    placeholder="Selecione um estado"
                                >
                                    {stateCode.map(
                                        (state: {
                                            code: string;
                                            name: string;
                                        }) => (
                                            <option
                                                key={state.code}
                                                value={state.code}
                                            >
                                                {state.name}
                                            </option>
                                        )
                                    )}
                                </Select>
                                {errors.federal_unit && (
                                    <Text
                                        p={'1'}
                                        _before={{
                                            content: '"⚠"',
                                        }}
                                        color={'red'}
                                    >
                                        {errors.federal_unit.message}
                                    </Text>
                                )}
                            </FormControl>
                        </HStack>
                    </Stack>
                </Stack>

                <Stack>
                    <Text
                        fontWeight={'bold'}
                        fontSize={'3xl'}
                        textTransform={'uppercase'}
                    >
                        Dados do Destinatário
                    </Text>
                    <FormControl id="firstname">
                        <FormLabel>Nome</FormLabel>
                        <Input
                            type="text"
                            focusBorderColor="purple.400"
                            {...register('first_name', {
                                required: 'Este campo é obrigatório.',

                                pattern: {
                                    value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
                                    message: 'Não pode conter números.',
                                },
                            })}
                        />
                        {errors.first_name && (
                            <Text
                                p={'1'}
                                _before={{
                                    content: '"⚠"',
                                }}
                                color={'red'}
                            >
                                {errors.first_name.message}
                            </Text>
                        )}
                    </FormControl>
                    <FormControl id="lastname">
                        <FormLabel>Sobrenome</FormLabel>
                        <Input
                            type="text"
                            focusBorderColor="purple.400"
                            {...register('last_name', {
                                required: 'Este campo é obrigatório.',

                                pattern: {
                                    value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
                                    message: 'Não pode conter números.',
                                },
                            })}
                        />
                        {errors.last_name && (
                            <Text
                                p={'1'}
                                _before={{
                                    content: '"⚠"',
                                }}
                                color={'red'}
                            >
                                {errors.last_name.message}
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
                                required: 'Este campo é obrigatório',
                                pattern: {
                                    value: /^\([1-9]{2}\) [9]{1}[0-9]{4}\-[0-9]{4}$/,
                                    message: 'Digite um telefone válido',
                                },
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
                    <FormControl id="cpf">
                        <FormLabel>CPF</FormLabel>
                        <Input
                            type="text"
                            as={InputMask}
                            mask="999.999.999-99"
                            focusBorderColor="purple.400"
                            {...register('cpf', {
                                required: 'Este campo é obrigatório.',

                                pattern: {
                                    value: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/g,
                                    message: 'Digite um CPF válido.',
                                },
                            })}
                        />
                        {errors.cpf && (
                            <Text
                                p={'1'}
                                _before={{
                                    content: '"⚠"',
                                }}
                                color={'red'}
                            >
                                {errors.cpf.message}
                            </Text>
                        )}
                    </FormControl>
                    <FormControl id="Email">
                        <FormLabel>E-mail</FormLabel>
                        <Input
                            type="text"
                            focusBorderColor="purple.400"
                            {...register('email', {
                                required: 'Este campo é obrigatório.',
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: 'Digite um E-mail válido.',
                                },
                            })}
                        />
                        {errors.email && (
                            <Text
                                p={'1'}
                                _before={{
                                    content: '"⚠"',
                                }}
                                color={'red'}
                            >
                                {errors.email.message}
                            </Text>
                        )}
                    </FormControl>

                    <Button
                        size={'lg'}
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
    );
};
export default FormEntries;
