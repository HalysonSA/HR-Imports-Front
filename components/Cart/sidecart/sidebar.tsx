import FooterSideBar from './footersidebar';
import ItemSideBar from './itemsidebar';

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Center,
    Text,
    Stack,
    Circle,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { cartIsOpen } from '../../Redux/CartSlice';
import { useContext } from 'react';
import { CartContext } from '../../../context/cart';
import { FiShoppingBag } from 'react-icons/fi';

import React from 'react';

type Props = {
    isCartOpen: boolean;
};
type Product = {
    _id: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    brand: string;
    material: string;
    category: string;
    size: string[];
    color: string[];
};

const CartSideBar = () => {
    const { onClose } = useDisclosure();
    const dispatch = useDispatch();

    const { cart } = useContext(CartContext);

    const isCartOpen = useSelector((state: Props) => state.isCartOpen);

    return (
        <Drawer
            size={'sm'}
            isOpen={isCartOpen}
            placement="right"
            onClose={onClose}
            onOverlayClick={() => dispatch(cartIsOpen(false))}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader p="6">
                    <DrawerCloseButton
                        left={5}
                        onClick={() => dispatch(cartIsOpen(false))}
                    />
                </DrawerHeader>

                <DrawerBody p={0}>
                    {cart.length ? (
                        cart.map((item: Product) => (
                            <div key={item._id}>
                                <ItemSideBar item={item} />
                            </div>
                        ))
                    ) : (
                        <Center>
                            <Stack color={'#7F858D'}>
                                <Center>
                                    <Circle
                                        size={90}
                                        border={'1px dashed #7F858D '}
                                    >
                                        <FiShoppingBag size={30} />
                                    </Circle>
                                </Center>

                                <Text fontSize={'xl'}>
                                    Seu carrinho está vazio
                                </Text>
                            </Stack>
                        </Center>
                    )}
                </DrawerBody>

                <DrawerFooter w="100%">
                    <FooterSideBar />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
export default CartSideBar;
