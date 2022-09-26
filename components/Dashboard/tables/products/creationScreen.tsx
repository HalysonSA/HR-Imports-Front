import React from 'react';
import { useForm } from 'react-hook-form';

import api from '../../../../api/axios';

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
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../Redux/ProductSlice';

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
    const dispatch = useDispatch();
    const size = ['P', 'M', 'G', 'GG', 'XG', 'XGG'];

    const Submit = (data: IFormInput) => {
        console.log(data);
        api.post('/products', {
            title: data.title,
            price: data.price,
            image: data.image,
            size: data.size,
            description: data.description,
            category: data.category,
            brand: data.brand,
            material: data.material,
            stock: data.stock,
        }).then(() => {
            dispatch(addProduct(data));
            reset();
        });
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
                    type={'number'}
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
                            {...register('category')}
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
                <FormControl m="2 ">
                    <FormLabel>Tamanho</FormLabel>

                    <HStack
                        pl={6}
                        mt={1}
                        spacing={1}
                    >
                        {size.map((item) => (
                            <Checkbox
                                borderColor={'white'}
                                key={item}
                                colorScheme="purple"
                                {...register('size')}
                                value={item}
                            >
                                {item}
                            </Checkbox>
                        ))}
                    </HStack>
                </FormControl>

                <Button
                    m="2"
                    type="submit"
                    borderRadius={15}
                    colorScheme={'green'}
                >
                    Confirmar
                </Button>
            </form>
        </Box>
    );
};
export default ScreenCreation;
