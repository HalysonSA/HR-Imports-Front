import {
    Box,
    Center,
    Divider,
    Flex,
    HStack,
    IconButton,
    Stack,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';
import moment from 'moment';
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useSelector } from 'react-redux';
import PriceFormat from '../../utils/priceFormat';
import { ReduxState } from '../Redux/type';
import ProductCardInformations from './ProductCardInformations';

const CustomerOrderCard = () => {
    const [isLargetThan768] = useMediaQuery('(min-width: 768px)');
    const [ids, setIds] = useState<string[]>([]);

    const orders = useSelector((state: ReduxState) => state.orders);

    return (
        <>
            {orders.map((order) => {
                const { _id, status, createdAt } = order;

                const { payment_amount, payment_method } = order.payment;

                const {
                    street_name,
                    street_number,
                    city,
                    neighborhood,
                    zip_code,
                } = order.user;

                // Transforming the Integer value of the Stripe payment into Float
                const len = payment_amount.toString().length;
                const payAmount = payment_amount.toString();

                const aux =
                    payAmount.substring(0, len - 2) +
                    '.' +
                    payAmount.substring(len - 2, len);

                const paymentAmount = parseFloat(aux);
                //////////////////////////////

                return (
                    <Flex
                        key={_id}
                        my={5}
                        borderRadius={'2xl'}
                        border={'1px solid #d3d3d3'}
                        _hover={{
                            boxShadow: '0px 0px 20px rgba(107, 70, 193, 0.25)',
                            border: 'none',
                            transition: 'all 0.2s ease-in-out',
                        }}
                        fontSize={'lg'}
                        fontWeight={'bold'}
                        direction={'column'}
                    >
                        <Flex
                            minH={'80px'}
                            my={4}
                            p={[4, 8]}
                            gap={4}
                            direction={'row'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            wrap={'wrap'}
                        >
                            <Stack>
                                <Text>#ID do Pedido</Text>
                                <Box>
                                    <Text color={'purple.600'}>{_id}</Text>
                                </Box>
                            </Stack>
                            {isLargetThan768 && (
                                <>
                                    <Stack minW={'150px'}>
                                        <Text>Status</Text>
                                        <Box>
                                            <Text
                                                color={
                                                    status == 'Processamento'
                                                        ? 'orange.400'
                                                        : 'green.400'
                                                }
                                            >
                                                {status}
                                            </Text>
                                        </Box>
                                    </Stack>
                                    <Stack minW={'150px'}>
                                        <Text>Data</Text>
                                        <Text color={'purple.600'}>
                                            {moment(createdAt).format(
                                                'DD/MM/YYYY'
                                            )}
                                        </Text>
                                    </Stack>
                                    <Stack minW={'150px'}>
                                        <Text>Pagamento</Text>
                                        <Text color={'purple.600'}>
                                            {payment_method == 'card'
                                                ? 'Cartão'
                                                : payment_method == 'boleto'
                                                ? 'Boleto'
                                                : 'Pix'}
                                        </Text>
                                    </Stack>
                                </>
                            )}
                            <IconButton
                                transform={
                                    ids.includes(_id)
                                        ? 'rotate(180deg)'
                                        : 'none'
                                }
                                transition=" 0.3s ease"
                                zIndex={5}
                                colorScheme={'purple'}
                                borderRadius={'full'}
                                aria-label="toggle"
                                icon={<MdOutlineKeyboardArrowDown size={30} />}
                                onClick={() => {
                                    setIds([...ids, _id]);
                                    if (ids.includes(_id)) {
                                        setIds(ids.filter((id) => id !== _id));
                                    }
                                }}
                            />
                        </Flex>
                        {ids.includes(_id) && (
                            <>
                                <Center>
                                    <Divider mx="4" />
                                </Center>
                                <Flex
                                    minH={'80px'}
                                    my={4}
                                    p={[4, 8]}
                                    gap={4}
                                    direction={'column'}
                                    justifyContent={'start'}
                                    alignItems={'start'}
                                    wrap={'wrap'}
                                >
                                    <Stack>
                                        <Text textTransform={'uppercase'}>
                                            Endereço
                                        </Text>
                                        <Text
                                            fontSize={'md'}
                                            color={'#565C69'}
                                        >
                                            {street_name}, Nº {street_number} ,{' '}
                                            {neighborhood}, <br />
                                            {zip_code} - {city}
                                        </Text>
                                    </Stack>
                                    <Stack>
                                        <Text textTransform={'uppercase'}>
                                            Produto(S)
                                        </Text>
                                        <ProductCardInformations
                                            orderCart={order.cart}
                                        />
                                    </Stack>
                                    <HStack
                                        w="100%"
                                        p={2}
                                        justifyContent={'space-between'}
                                        borderRadius={'2xl'}
                                        fontWeight={'bold'}
                                        color={'white'}
                                        bgColor={'purple.600'}
                                        px={2}
                                    >
                                        <Text textTransform={'uppercase'}>
                                            Total do pedido
                                        </Text>

                                        <Text>
                                            {PriceFormat(paymentAmount)}
                                        </Text>
                                    </HStack>
                                </Flex>
                            </>
                        )}
                    </Flex>
                );
            })}
        </>
    );
};
export default CustomerOrderCard;
