import { Center, Flex, Stack, Text, Box, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import StatusBar from '../components/Cart/cartcomponents/statusBar';
import Layout from '../components/Layout/Layout';
import CartItems from '../components/Cart/cartcomponents/cartItems';

const Payment = () => {
    return (
        <Layout>
            <Center m={5}>
                <StatusBar />
            </Center>
            <Flex gap={5}>  
                <Stack>
                    <Text textTransform={'uppercase'} fontSize={'3xl'} fontWeight={'bold'}>Selecione a forma de pagamento</Text>
                    <Flex borderRadius={'20px'} minW={'300px'}  >
                        <FormControl>
                            <FormLabel>Forma de pagamento</FormLabel>
                            <Select
                                focusBorderColor='purple.400'
                                placeholder="Selecione a forma de pagamento"
                            >
                                <option value="creditCard">Cartão de crédito</option>
                                <option value="debitCard">Cartão de débito</option>
                                <option value="boleto">Boleto</option>
                                <option value="pix">Pix</option>
                                <option value="mercado pago">Mercado Pago</option>
                            </Select>
                        </FormControl>
                    </Flex>
                        <CartItems/>
                </Stack>
                <Stack borderLeft={'1px'} color={'purple.400'}>
                {/* Aparecer a tela de acordo com a forma de pagamento */}
                 </Stack>


            </Flex>

        </Layout>
    );
};
export default Payment;
