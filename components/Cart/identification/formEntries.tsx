import validateCPF from '../../../utils/checkCpf';
import { toast } from 'react-toastify';

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
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

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

const FormEntries = () => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState<boolean>(false);
    const [zipCode, setZipCode] = useState('');
    const [cpf, setCpf] = useState<boolean>(false);
    const [localization, setLocalization] = useState<Localization>();

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
        getValues,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        criteriaMode: 'all',
    });

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

        setCpf(validateCPF(data.cpf));
       
        //enviar dados para o backend

        cpf
            ? null
            : toast.error('Digite um CPF válido', {
                  position: 'top-center',
              });

        location.href = '/payment';
    };

    localization ? setValue('city', localization?.localidade) : null;
    localization ? setValue('state', localization?.uf) : null;
    localization ? setValue('zipcode', localization?.cep) : null;

    return (
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
                                {loading ? <Spinner color="white" /> : 'Buscar'}
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
                                    required: 'Este campo é obrigatório.',

                                    pattern: {
                                        value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
                                        message: 'Não pode conter números.',
                                    },
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
                                    required: 'Este campo é obrigatório.',

                                    pattern: {
                                        value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
                                        message: 'Não pode conter números.',
                                    },
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
                        <FormControl id="name">
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
                                        message:
                                            'Por favor, digite um CPF válido.',
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
                                    required: 'Este campo é obrigatório.',

                                    pattern: {
                                        value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
                                        message: 'Não pode conter números.',
                                    },
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
                                        required: 'Este campo é obrigatório.',
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
                                variant={
                                    localization?.localidade
                                        ? 'filled'
                                        : 'outline'
                                }
                                focusBorderColor="purple.400"
                                value={localization?.localidade}
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
                                    value={localization?.cep.replace('-', '')}
                                    as={InputMask}
                                    mask="99999-999"
                                    {...register('zipcode', {
                                        required: 'Este campo é obrigatório',
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
                                        required: 'Este campo é obrigatório',
                                    })}
                                    variant={
                                        localization?.uf ? 'filled' : 'outline'
                                    }
                                    focusBorderColor="purple.400"
                                    value={localization?.uf}
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
