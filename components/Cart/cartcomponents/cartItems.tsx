import { Box, Flex, HStack, Text, Button } from '@chakra-ui/react';
import { BsBasket2Fill } from 'react-icons/bs';
import { FiTrash } from 'react-icons/fi';
import ProductCard from './productCard';

const CartItems = () => {
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
                        fontSize={'2xl'}
                        textTransform={'uppercase'}
                    >
                        Seus Produtos
                    </Text>
                </HStack>
                <Box pt="2">
                    <Button
                        variant={'outline'}
                        colorScheme={'red'}
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
            <Box h="700px">
                <ProductCard />
            </Box>
        </Flex>
    );
};
export default CartItems;
