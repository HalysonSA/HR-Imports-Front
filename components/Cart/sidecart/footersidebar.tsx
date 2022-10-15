import { Stack, Flex, Text, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../../../context/cart';

const FooterSideBar = () => {

    const { totalValue } = useContext(CartContext);

    return (
        <Stack
            w="100%"
            spacing={5}
            m="5"
        >
            <Flex justifyContent={'space-between'}>
                <Text
                    fontWeight={'extrabold'}
                    fontSize={'xl'}
                >
                    Subtotal:
                </Text>
                <Text
                    fontWeight={'extrabold'}
                    fontSize={'xl'}
                >
                    R${totalValue.toFixed(2).replace('.', ',')}
                </Text>
            </Flex>
            <Button
                fontWeight={'bold'}
                textTransform={'uppercase'}
                variant={'outline'}
                bg="white"
                borderColor={'purple.400'}
                py="7"
                _hover={{
                    bg: 'purple.50',
                }}
                _active={{
                    bg: 'purple.100',
                }}
            >
                Finalizar compra
            </Button>
        </Stack>
    );
};
export default FooterSideBar;