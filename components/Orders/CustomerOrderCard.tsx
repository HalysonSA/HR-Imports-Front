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
import { Props } from '../../pages/orders';
import PriceFormat from '../../utils/priceFormat';
import ProductCardInformations from './ProductCardInformations';

const CustomerOrderCard = ({ _id, cart, user, createdAt }: Props) => {
    const [isLargetThan768] = useMediaQuery('(min-width: 768px)');
    const [toggle, setToggle] = useState(false);

    return (
        <Flex
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
                p={8}
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
                                <Text color={'green.400'}>Enviado</Text>
                            </Box>
                        </Stack>
                        <Stack minW={'150px'}>
                            <Text>Data</Text>
                            <Text color={'purple.600'}>
                                {moment(createdAt).format('DD/MM/YYYY')}
                            </Text>
                        </Stack>
                        <Stack minW={'150px'}>
                            <Text>Pagamento</Text>
                            <Text color={'purple.600'}>Boleto</Text>
                        </Stack>
                    </>
                )}
                <IconButton
                    transform={toggle ? 'rotate(180deg)' : ''}
                    transition=" 0.3s ease"
                    zIndex={5}
                    colorScheme={'purple'}
                    borderRadius={'full'}
                    aria-label="toggle"
                    icon={<MdOutlineKeyboardArrowDown size={30} />}
                    onClick={() => setToggle(!toggle)}
                />
            </Flex>
            {toggle && (
                <>
                    <Center>
                        <Divider mx="4" />
                    </Center>
                    <Flex
                        minH={'80px'}
                        my={4}
                        p={8}
                        gap={4}
                        direction={'column'}
                        justifyContent={'start'}
                        alignItems={'start'}
                        wrap={'wrap'}
                    >
                        <Stack>
                            <Text textTransform={'uppercase'}>Endereço</Text>
                            <Text
                                fontSize={'md'}
                                color={'#565C69'}
                            >
                                {user?.street_name}, Nº {user?.street_number} ,{' '}
                                {user?.neighborhood}, <br />
                                {user?.zip_code} - {user?.city}
                            </Text>
                        </Stack>
                        <Stack>
                            <Text textTransform={'uppercase'}>Produto(S)</Text>
                            <ProductCardInformations />
                        </Stack>
                        <HStack
                            w="100%"
                            p={2}
                            justifyContent={'space-between'}
                            bgColor={'#F5F5F5'}
                            fontWeight={'bold'}
                        >
                            <Text textTransform={'uppercase'}>
                                Total do pedido
                            </Text>

                            <Text>{PriceFormat(120.99)}</Text>
                        </HStack>
                    </Flex>
                </>
            )}
        </Flex>
    );
};
export default CustomerOrderCard;
