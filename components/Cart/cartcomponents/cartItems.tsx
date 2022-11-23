import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Box,
    Button,
    Flex,
    HStack,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { BsBasket2Fill } from 'react-icons/bs';
import { FiTrash } from 'react-icons/fi';
import { CartContext } from '../../../context/cart';
import ProductCard from './productCard';

const CartItems = () => {
    const { clearCart } = useContext(CartContext);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleClearCart = () => {
        clearCart();
        onClose();
    };

    return (
        <Flex
            direction={'column'}
            w={['100%', '100%', '65%', '75%']}
            maxW={'1200px'}
            gap={3}
        >
            <Flex
                justifyContent={'space-between'}
                alignContent={'center'}
                minH={'50px'}
                flexWrap={'wrap'}
            >
                <HStack>
                    <BsBasket2Fill
                        size={25}
                        fill={'#6B46C1'}
                    />
                    <Text
                        fontWeight={'bold'}
                        fontSize={'3xl'}
                        textTransform={'uppercase'}
                    >
                        Seus Produtos
                    </Text>
                </HStack>
                <Box pt="2">
                    <Button
                        variant={'outline'}
                        colorScheme={'red'}
                        onClick={() => onOpen()}
                    >
                        <FiTrash size={15} />
                        <Text
                            pl={2}
                            fontWeight={'extrabold'}
                            fontSize={'sm'}
                            textTransform={'uppercase'}
                        >
                            Limpar Carrinho
                        </Text>
                    </Button>
                </Box>
            </Flex>

            <AlertDialog
                isOpen={isOpen}
                //@ts-ignore
                leastDestructiveRef={undefined}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader
                            fontSize="lg"
                            fontWeight="bold"
                        >
                            Limpar o carrinho
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Você tem certeza que deseja limpar o carrinho?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button onClick={onClose}>Cancelar</Button>
                            <Button
                                colorScheme="red"
                                onClick={() => handleClearCart()}
                                ml={3}
                            >
                                Limpar
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>

            <Box
                minH={['100px', '100px', '700px']}
                h="auto"
            >
                <ProductCard />
            </Box>
        </Flex>
    );
};
export default CartItems;
