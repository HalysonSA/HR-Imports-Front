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
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { cartIsOpen } from '../Redux/CartSlice';

type Props = {
    isCartOpen: boolean;
};

const CartSideBar = () => {
    const { onClose } = useDisclosure();
    const dispatch = useDispatch();

    const isCartOpen = useSelector((state: Props) => state.isCartOpen);

    return (
        <Drawer
            size={'sm'}
            isOpen={isCartOpen}
            placement="right"
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader p="6">
                    <DrawerCloseButton
                        left={5}
                        onClick={() => dispatch(cartIsOpen(false))}
                    />
                </DrawerHeader>

                <DrawerBody>
                    <ItemSideBar />
                    <ItemSideBar />
                    <ItemSideBar />
                    <ItemSideBar />
                    <ItemSideBar />
                </DrawerBody>

                <DrawerFooter w="100%">
                    <FooterSideBar />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
export default CartSideBar;
