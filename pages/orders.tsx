import { Box, HStack, Select, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import Layout from '../components/Layout/Layout';
import useOrdersSync from '../utils/myOrdersState';

import { useDispatch } from 'react-redux';
import CustomerOrderCard from '../components/Orders/CustomerOrderCard';
import { setOrdersProps } from '../components/Redux/OrderSlice';

const Orders = () => {
    const [myOrders, setMyOrders] = useState([]);

    const response = useOrdersSync();
    const dispatch = useDispatch();

    dispatch(setOrdersProps(response));

    useEffect(() => {
        setMyOrders(response);
    }, [response]);

    return (
        <Layout>
            <Box
                minH={'700px'}
                mb={8}
            >
                <HStack py={4}>
                    <MdOutlineProductionQuantityLimits
                        size={30}
                        fill={'#6B46C1'}
                    />
                    <Text
                        fontSize={'2xl'}
                        fontWeight={'bold'}
                        textTransform={'uppercase'}
                    >
                        Meus Pedidos
                    </Text>
                </HStack>

                <HStack
                    minW="300px"
                    py={4}
                >
                    <Text fontSize="lg"> Filtrar por:</Text>
                    <Select
                        focusBorderColor="purple.600"
                        maxW="170px"
                        onChange={(e) => {}}
                        fontSize="lg"
                    >
                        <option value={'sent'}>Enviado</option>
                        <option value={'processing'}>Processamento</option>
                        <option value={'success'}>Concluido</option>
                        <option value={'canceled'}>Cancelado</option>
                        <option value={'pending'}>Pendente</option>
                    </Select>
                </HStack>
                <CustomerOrderCard />
            </Box>
        </Layout>
    );
};
export default Orders;
