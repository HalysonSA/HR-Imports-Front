import { Box, Flex,  Button } from '@chakra-ui/react';
import FooterSideBar from './footersidebar';
import ItemSideBar from './itemsidebar';
import { MdClose } from 'react-icons/md';
const CartSideBar = () => {
    return (
        <Box
            w={['100%', '70%', '30%']}
            right="0"
            top="0"
            position={'absolute'}
            zIndex={99}
            borderLeft="1px solid"
            borderBottom="1px solid"
            bg="#DFE8EF"
            borderColor="purple.400"
        >
            <Box m="3">
                <Button
                    bg="transparent"
                    //Fechar o carrinho usando estado Redux
                    //onClick={() => {}
                    _hover={{
                        bg: 'transparent',
                        transform: 'scale(1.1)',
                    }}
                >
                    <MdClose size={30} />
                </Button>
            </Box>
            <Flex direction={'column'}>
                <ItemSideBar />
                <ItemSideBar />
                <ItemSideBar />
                <FooterSideBar />
            </Flex>
        </Box>
    );
};
export default CartSideBar;
