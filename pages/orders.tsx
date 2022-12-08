import { Box, HStack, Select, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import Layout from '../components/Layout/Layout';
import CustomerOrderCard from '../components/Orders/CustomerOrderCard';
import useOrdersSync from '../utils/myOrdersState';

export type Props = {
    _id?: string;
    status?: string;
    user?: {
        street_name: string;
        street_number: number;
        city: string;
        complement: string;
        cpf: string;
        email: string;
        federal_unit: string;
        first_name: string;
        last_name: string;
        neighborhood: string;
        telephone: string;
        zip_code: string;
    };
    cart?: [];
    payment?: {
        payment_status: string;
        payment_type: string;
    };

    createdAt?: string;
};

const Orders = () => {
    const [myOrders, setMyOrders] = useState([]);

    const response = useOrdersSync();

    useEffect(() => {
        setMyOrders(response);
    }, [response]);

    return (
        <Layout>
            <Box minH={'700px'}>
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
                <Stack
                    spacing={7}
                    mb={'8em'}
                >
                    {myOrders.map((props: Props) => {
                        const { _id, cart, user, createdAt } = props;

                        return (
                            <div key={_id}>
                                <CustomerOrderCard
                                    _id={_id}
                                    cart={cart}
                                    user={user}
                                    createdAt={createdAt}
                                />
                            </div>
                        );
                    })}
                </Stack>
            </Box>
        </Layout>
    );
};
export default Orders;
