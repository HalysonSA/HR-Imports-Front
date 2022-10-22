import {
    CircularProgress,
    CircularProgressLabel,
    Flex,
    HStack,
    Text,
} from '@chakra-ui/react';
import { AiFillCreditCard, AiFillEye } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { CartContext } from '../../../context/cart';
import { useContext } from 'react';

const StatusBar = () => {

    const { status } = useContext(CartContext);



    return (
        <Flex direction={'row'}>
            <CircularProgress
                size="100px"
                thickness="15px"
                value={status}
                color="purple.400"
                mr="5"
            >
                <CircularProgressLabel
                    fontWeight={'bold'}
                    fontSize={'lg'}
                >
                   {status}%
                </CircularProgressLabel>
            </CircularProgress>
            <HStack
                fontWeight={'bold'}
                spacing={5}
            >
                <Flex
                    direction={'column'}
                    alignItems={'center'}
                    color={'purple.400'}
                >
                    <MdShoppingCart size={40} />
                    <Text>Carrinho</Text>
                </Flex>
                <Flex
                    direction={'column'}
                    alignItems={'center'}
                    color={ status >= 40 ? 'purple.400' : 'blackAlpha.300'}
                >
                    <FaUserAlt size={40} />
                    <Text>Identificação</Text>
                </Flex>
                <Flex
                    direction={'column'}
                    alignItems={'center'}
                    
                    color={ status >= 60 ? 'purple.400' : 'blackAlpha.300'}
                >
                    <AiFillCreditCard size={40} />
                    <Text>Pagamento</Text>
                </Flex>
                <Flex
                    direction={'column'}
                    alignItems={'center'}
                    
                    color={ status >= 80 ? 'purple.400' : 'blackAlpha.300'}
                >
                    <AiFillEye size={40} />
                    <Text>Confirmação</Text>
                </Flex>
                <Flex
                    direction={'column'}
                    alignItems={'center'}
                   
                    color={ status >= 100 ? 'purple.400' : 'blackAlpha.300'}
                >
                    <MdVerified size={40} />
                    <Text>Sucesso</Text>
                </Flex>
            </HStack>
        </Flex>
    );
};
export default StatusBar;
