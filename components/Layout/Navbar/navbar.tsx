import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
    Stack,
    Image,
    Text,
    Spacer,
    Center,
    Container,
} from '@chakra-ui/react';
import {HiMenuAlt3 } from 'react-icons/hi';

import { useRouter } from 'next/router';

import { CloseIcon } from '@chakra-ui/icons';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { useSession, signOut } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { signInUser } from '../../../components/Redux/UserSlice';
import CartSideBar from '../../Cart/sidecart/sidebar';
import { cartIsOpen } from '../../Redux/CartSlice';

import { CartContext } from '../../../context/cart';

type UserInfo = {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
};

type UserType = {
    user: UserInfo;
};

export default function Navbar() {
    const dispatch = useDispatch();
    const user = useSelector((state: UserType) => state.user);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();

    const { data: session } = useSession();

    const { totalQuantity } = useContext(CartContext);

    useEffect(() => {
        sessionStorage.getItem('user')
            ? dispatch(signInUser(JSON.parse(sessionStorage.getItem('user')!)))
            : null;
    }, []);

    function handleLogout() {
        signOut();
        sessionStorage.removeItem('user');
    }

    function handleOpenCart() {
        dispatch(cartIsOpen(true));
    }

    return (
        <Container
            zIndex="100"
            top={0}
            position="sticky"
            bg="white"
            px={['4', '10']}
            maxW="1500px"
        >
            <Flex
                h={'90px'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <HStack
                    spacing={8}
                    alignItems={'center'}
                >
                    <Box
                        onClick={() => router.push('/')}
                        _hover={{ cursor: 'pointer' }}
                    >
                        <Image
                            w="80px"
                            h="80px"
                            src="/logo.svg"
                            alt="Logo"
                        />
                    </Box>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Link
                            href="/shop"
                            fontSize={'lg'}
                            fontWeight={'bold'}
                            _hover={{
                                color: 'purple.600',
                            }}
                        >
                            Nossos produtos
                        </Link>

                        <Link
                            href="/about"
                            fontSize={'lg'}
                            fontWeight={'bold'}
                            _hover={{
                                color: 'purple.600',
                            }}
                        >
                            Sobre
                        </Link>
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <HStack>
                    <Flex
                                cursor={'pointer'}
                                onClick={() => handleOpenCart()}
                                _hover={{
                                    color: 'purple.600',
                                }}
                            >
                                <AiOutlineShoppingCart size={35} />

                                <Center
                                    w="18px"
                                    h="18px"
                                    transform={'translate(-10px, -5px)'}
                                    borderRadius={'30px'}
                                    bg="red"
                                >
                                    <Text
                                        fontSize={'sm'}
                                        color={'white'}
                                        fontWeight={'bold'}
                                    >
                                        {totalQuantity}
                                    </Text>
                                </Center>
                            </Flex>
                        <Menu>
                            <MenuButton
                                as={Button}
                                
                                onClick={() => {
                                    !(session || user.name) ? router.push('/login') : onOpen();
                                }}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}
                            >
                                    <Avatar
                                        size={'sm'}
                                        src={
                                            session?.user?.image ||
                                            user.name ||
                                            undefined
                                        }
                                        referrerPolicy={'no-referrer'}
                                        name={
                                            session?.user?.name ||
                                            user.name ||
                                            undefined
                                        }
                                    />
                            </MenuButton>
                            <MenuList zIndex={99} color={'black'}>
                                {session || user.name ? (
                                    <>
                                        <MenuItem
                                            onClick={() =>
                                                router.push('/orders')
                                            }
                                        >
                                            Meus Pedidos
                                        </MenuItem>
                                        <MenuItem
                                            bg="transparent"
                                            _hover={{
                                                bg: 'red',
                                                color: 'white',
                                            }}
                                            onClick={() => handleLogout()}
                                        >
                                            Sair
                                        </MenuItem>
                                    </>
                                ) : null}
                            </MenuList>
                            <Spacer />
                           

                            <CartSideBar />


                            <IconButton
                                bg="transparent"
                                size={'lg'}
                                icon={
                                    isOpen ? <CloseIcon /> : <HiMenuAlt3 size={30}/>
                                }
                                aria-label={'Open Menu'}
                                display={{ md: 'none' }}
                                onClick={isOpen ? onClose : onOpen}
                            />
                        </Menu>
                    </HStack>
                </Flex>
            </Flex>

            {isOpen ? (
                <Box
                    pb={4}
                    display={{ md: 'none' }}
                >
                    <Stack
                        as={'nav'}
                        spacing={4}
                    >
                        <HStack>
                            
                            <Link
                                href="/shop"
                                fontSize={'lg'}
                                fontWeight={'bold'}
                            >
                               Nossos produtos
                            </Link>
                            <Link
                                href="/about"
                                fontSize={'lg'}
                                fontWeight={'bold'}
                            >
                                Sobre
                            </Link>
                        </HStack>
                    </Stack>
                </Box>
            ) : null}
        </Container>
    );
}
