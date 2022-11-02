import {
    Center,
    Flex,
    Text,
    Box,
    FormControl,
    FormLabel,
    Select,
    Image,
    Button,
    HStack,
    Stack,
} from '@chakra-ui/react';
import StatusBar from '../components/Cart/cartcomponents/statusBar';
import Layout from '../components/Layout/Layout';
import api from '../api/axios';

import { CartContext } from '../context/cart';
import { useContext } from 'react';

const Payment = () => {
    const { cart, checkFormOfPayment, formOfPayment } = useContext(CartContext);

    const handleSubmit = async () => {
        return;
  
    };

    return (
        <Layout>
            <Center m={5}>
                <StatusBar />
            </Center>
            <Flex
                gap={5}
                direction={'column'}
            >
                <Text>{formOfPayment}</Text>
                <Text
                    textTransform={'uppercase'}
                    fontSize={'3xl'}
                    fontWeight={'bold'}
                >
                    Selecione a forma de pagamento
                </Text>
                <Flex borderRadius={'20px'}>
                    <FormControl w={['100%', '60%', '40%']}>
                        <FormLabel>Forma de pagamento</FormLabel>
                        <HStack>
                            <Select
                                focusBorderColor="purple.400"
                                placeholder="Selecione a forma de pagamento"
                                onChange={(e) =>
                                    checkFormOfPayment(e.target.value)
                                }
                            >
                                <option value="creditCard">
                                    Cartão de crédito
                                </option>
                                <option value="debitCard">
                                    Cartão de débito
                                </option>
                                <option value="boleto">Boleto</option>
                                <option value="pix">Pix</option>
                                <option value="mercadoPago">
                                    Mercado Pago
                                </option>
                            </Select>
                            <Button colorScheme={'purple'} onClick={() => handleSubmit}>Confirmar</Button>
                        </HStack>
                    </FormControl>
                </Flex>
                <Flex borderRadius={'20px'}>
                    <Box
                        bg="gray.50"
                        w="100%"
                        borderRadius={'15px'}
                        minH="600px"
                    ></Box>
                </Flex>
            </Flex>
        </Layout>
    );
};
export default Payment;
