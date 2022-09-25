import React from 'react';
import { useForm } from 'react-hook-form';

import {
    Box,
    Button,
    Input,
    Textarea,
    FormControl,
    FormLabel,
    Select,
    Checkbox,
    HStack,
} from '@chakra-ui/react';

interface IFormInput {
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    brand: string;
    material: string;
    stock: number;
    size: [];
}

const ScreenCreation = () => {
    const { register, handleSubmit, reset } = useForm<IFormInput>();

    const Submit = (data: IFormInput) => {
        console.log(data);
    };

    return (
        <Box px="5">
            <form onSubmit={handleSubmit(Submit)}>
                <FormControl
                    m="2"
                    isRequired
                >
                    <FormLabel>Titulo</FormLabel>
                    <Input
                        focusBorderColor="white"
                        placeholder="Nome"
                        {...register('title')}
                    />
                </FormControl>
                <FormControl
                    m="2"
                    isRequired
                >
                    <FormLabel>Preço</FormLabel>

                    <Input
                        focusBorderColor="white"
                        placeholder="R$ 0,00"
                        {...register('price')}
                    />
                </FormControl>
                <FormControl
                    m="2"
                    isRequired
                >
                    <FormLabel fontWeight={'medium'}>Imagem</FormLabel>
                    <Input
                        focusBorderColor="white"
                        placeholder="URL da imagem"
                        {...register('image')}
                    />
                </FormControl>
                <FormControl
                    m="2"
                    isRequired
                >
                    <FormLabel>Descrição</FormLabel>

                    <Textarea
                        focusBorderColor="white"
                        placeholder="Descrição"
                        {...register('description')}
                    />
                </FormControl>
                <HStack>
                    <FormControl
                        m="2"
                        isRequired
                    >
                        <FormLabel>Categoria</FormLabel>
                        <Select
                            placeholder="Escolha a categoria"
                            focusBorderColor="white"
                        >
                            <option>Calça</option>
                            <option>Camisa</option>
                        </Select>
                    </FormControl>
                    <FormControl m="2">
                        <FormLabel>Estoque</FormLabel>

                        <Input
                            type={'number'}
                            focusBorderColor="white"
                            placeholder="Quantidade em estoque"
                            {...register('stock')}
                        />
                    </FormControl>
                </HStack>
                <HStack>
                    <FormControl m="2">
                        <FormLabel>Material</FormLabel>
                        <Input
                            focusBorderColor="white"
                            placeholder="Ex: Algodão"
                            {...register('material')}
                        />
                    </FormControl>
                    <FormControl m="2">
                        <FormLabel>Marca</FormLabel>
                        <Input
                            focusBorderColor="white"
                            placeholder="Ex: Nike"
                            {...register('brand')}
                        />
                    </FormControl>
                </HStack>
                <FormControl
                    m="2 "
                    isRequired
                >
                    <FormLabel>Tamanho</FormLabel>
                    <>
                        <Checkbox borderColor="white">Todos</Checkbox>
                        <HStack
                            pl={6}
                            mt={1}
                            spacing={1}
                        >
                            <Checkbox borderColor="white">P</Checkbox>
                            <Checkbox borderColor="white">M</Checkbox>
                            <Checkbox borderColor="white">G</Checkbox>
                            <Checkbox borderColor="white">GG</Checkbox>
                        </HStack>
                    </>
                </FormControl>

                <Button
                    m="2"
                    type="submit"
                    borderRadius={0}
                    colorScheme={'green'}
                >
                    Confirmar
                </Button>
            </form>
        </Box>
    );
};
export default ScreenCreation;
