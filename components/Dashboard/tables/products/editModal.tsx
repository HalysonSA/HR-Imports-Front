import api from '../../../api/axios';

import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Textarea,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';

import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { updateProduct } from '../../../Redux/ProductSlice';

type productInfo = {
    _id: number;
    title?: string;
    price?: number;
    image?: string;
    size?: [];
    description?: string;
    category?: string;
    brand?: string;
    material?: string;
    stock?: number;
    color?: string;
};

type Props = {
    product: productInfo;
    isOpen: boolean;
    onClose: () => void;
};

const EditModal = ({ product, isOpen, onClose }: Props) => {
    const dispatch = useDispatch();

    const { register, handleSubmit, reset } = useForm<productInfo>();

    const size = ['P', 'M', 'G', 'GG', 'XG', 'XGG'];

    async function Update(data: productInfo) {
        try {
            const price = data.price;
            data.price = Number(price?.toString().replace(',', '.'));
            await api
                .patch(`/products/${product._id}`, {
                    title: data.title,
                    price: data.price,
                    image: data.image,
                    size: data.size,
                    description: data.description,
                    category: data.category,
                    brand: data.brand,
                    material: data.material,
                    stock: data.stock,
                })
                .then(() => {
                    toast.success('Produto atualizado com sucesso!');
                    data._id = product._id;
                    dispatch(updateProduct(data));
                })
                .catch(() => toast.error('Algo deu errado!'));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            scrollBehavior={'inside'}
        >
            <ModalOverlay bg="blackAlpha.50" />
            <ModalContent
                mx="4"
                mt="6em"
            >
                <ModalHeader>Editar Produto</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <form onSubmit={handleSubmit(Update)}>
                        <FormControl m="2">
                            <FormLabel>Titulo</FormLabel>
                            <Input
                                type={'text'}
                                defaultValue={product.title}
                                focusBorderColor="white"
                                placeholder="Nome"
                                {...register('title')}
                            />
                        </FormControl>
                        <FormControl m="2">
                            <FormLabel>Preço</FormLabel>

                            <Input
                                defaultValue={product.price}
                                focusBorderColor="white"
                                placeholder="R$ 0,00"
                                {...register('price')}
                            />
                        </FormControl>
                        <FormControl m="2">
                            <FormLabel fontWeight={'medium'}>Imagem</FormLabel>
                            <Input
                                type={'text'}
                                defaultValue={product.image}
                                focusBorderColor="white"
                                placeholder="URL da imagem"
                                {...register('image')}
                            />
                        </FormControl>
                        <FormControl m="2">
                            <FormLabel>Descrição</FormLabel>

                            <Textarea
                                defaultValue={product.description}
                                focusBorderColor="white"
                                placeholder="Descrição"
                                {...register('description')}
                            />
                        </FormControl>
                        <HStack>
                            <FormControl m="2">
                                <FormLabel>Categoria</FormLabel>
                                <Select
                                    {...register('category')}
                                    defaultValue={product.category}
                                    placeholder="Escolha a categoria"
                                    focusBorderColor="white"
                                >
                                    <option>Eletrônico</option>
                                    <option>Roupas</option>
                                    <option>Calçados</option>
                                    <option>Brinquedos</option>
                                    <option>Acessórios</option>
                                    <option>Outros</option>
                                </Select>
                            </FormControl>
                            <FormControl m="2">
                                <FormLabel>Cor</FormLabel>
                                <Select
                                    defaultValue={product.color}
                                    placeholder="Escolha a cor"
                                    focusBorderColor="white"
                                    {...register('color')}
                                >
                                    <option>Preto</option>
                                    <option>Vermelho</option>
                                    <option>Verde</option>
                                    <option>Azul</option>
                                    <option>Branco</option>
                                    <option>Cinza</option>
                                    <option>Amarelo</option>
                                </Select>
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl m="2">
                                <FormLabel>Material</FormLabel>
                                <Input
                                    type={'text'}
                                    defaultValue={product.material}
                                    focusBorderColor="white"
                                    placeholder="Ex: Algodão"
                                    {...register('material')}
                                />
                            </FormControl>
                            <FormControl m="2">
                                <FormLabel>Marca</FormLabel>
                                <Input
                                    type={'text'}
                                    defaultValue={product.brand}
                                    focusBorderColor="white"
                                    placeholder="Ex: Nike"
                                    {...register('brand')}
                                />
                            </FormControl>
                        </HStack>
                        <FormControl m="2 ">
                            <FormLabel>Tamanho</FormLabel>
                            <>
                                <HStack
                                    pl={6}
                                    mt={1}
                                    spacing={1}
                                >
                                    {size.map((size) => (
                                        <Checkbox
                                            {...register('size')}
                                            key={size}
                                            value={size}
                                            colorScheme="purple"
                                            defaultChecked
                                        >
                                            {size}
                                        </Checkbox>
                                    ))}
                                </HStack>
                            </>
                        </FormControl>
                        <ModalFooter>
                            <Button
                                type="submit"
                                colorScheme="purple"
                                mr={3}
                            >
                                Confirmar
                            </Button>
                            <Button onClick={onClose}>Cancelar</Button>
                        </ModalFooter>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
export default EditModal;
