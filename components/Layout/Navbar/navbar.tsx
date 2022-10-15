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
} from '@chakra-ui/react';

import { useRouter } from 'next/router';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { useSession, signOut } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { signInUser } from '../../../components/Redux/UserSlice';
import CartSideBar from '../../Cart/sidecart/sidebar';
import { cartIsOpen } from '../../Redux/CartSlice';

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
        <Box
            zIndex="100"
            top={0}
            position="sticky"
            bg="white"
            px={['4', '10']}
        >
            <Flex
                h={'70px'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <HStack
                    spacing={8}
                    alignItems={'center'}
                >
                    <Box>
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
                        <Menu>
                            <MenuButton
                                as={Button}
                                cursor={'pointer'}
                                p="2"
                                fontSize={'lg'}
                                fontWeight={'bold'}
                                bg={'transparent'}
                                _hover={{
                                    bg: 'transparent',
                                    transform: 'scale(1.1)',
                                }}
                                _active={{ bg: 'transparent' }}
                            >
                                Categorias
                            </MenuButton>
                            <MenuList zIndex={99}>
                                <MenuItem>Eletrônicos</MenuItem>
                                <MenuItem>Utilitários de Cozinha</MenuItem>
                            </MenuList>
                        </Menu>
                        <Link
                            href="/shop"
                            fontSize={'lg'}
                            fontWeight={'bold'}
                            _hover={{
                                transform: 'scale(1.1)',
                            }}
                        >
                            Produtos
                        </Link>

                        <Link
                            href="/about"
                            fontSize={'lg'}
                            fontWeight={'bold'}
                            _hover={{
                                transform: 'scale(1.1)',
                            }}
                        >
                            Sobre
                        </Link>
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <HStack>
                        <Menu>
                            <MenuButton
                                as={Button}
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
                            <MenuList zIndex={99}>
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
                                ) : (
                                    <MenuItem
                                        w="100%"
                                        bg="transparent"
                                        onClick={() => router.push('/login')}
                                    >
                                        Entre ou cadastre-se
                                    </MenuItem>
                                )}
                            </MenuList>
                            <Text
                                fontSize={'lg'}
                                fontWeight={'semi-bold'}
                                display={{ base: 'none', md: 'flex' }}
                            >
                                {session
                                    ? 'Olá, ' + session?.user?.name
                                    : user.name
                                    ? 'Olá, ' + user.name
                                    : 'Entre ou cadastre-se'}
                            </Text>
                            <Spacer />
                            <Flex
                                cursor={'pointer'}
                                onClick={() => handleOpenCart()}
                            >
                                <AiOutlineShoppingCart size={30} />

                                <Center
                                    w="15px"
                                    h="15px"
                                    top="15px"
                                    right={['4em', '5.5em', '35px']}
                                    position={'absolute'}
                                    borderRadius={'30px'}
                                    bg="red"
                                >
                                    <Text
                                        fontSize={'sm'}
                                        color={'white'}
                                        fontWeight={'bold'}
                                    >
                                        1
                                    </Text>
                                </Center>
                            </Flex>

                            <CartSideBar />
                            <IconButton
                                bg="transparent"
                                size={'lg'}
                                icon={
                                    isOpen ? <CloseIcon /> : <HamburgerIcon />
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
                            <Menu>
                                <MenuButton
                                    float={'left'}
                                    as={Button}
                                    p="0"
                                    cursor={'pointer'}
                                    fontSize={'lg'}
                                    fontWeight={'bold'}
                                    bg={'transparent'}
                                    _hover={{ bg: 'transparent' }}
                                    _active={{ bg: 'transparent' }}
                                >
                                    Categorias
                                </MenuButton>
                                <MenuList zIndex={99}>
                                    <MenuItem>Blusas</MenuItem>
                                    <MenuItem>Conjuntos</MenuItem>
                                    <MenuItem>Legging</MenuItem>
                                    <MenuItem>Shorts</MenuItem>
                                    <MenuItem>Regatas</MenuItem>
                                    <MenuItem>Top</MenuItem>
                                </MenuList>
                            </Menu>
                            <Link
                                href="/shop"
                                fontSize={'lg'}
                                fontWeight={'bold'}
                            >
                                Produtos
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
        </Box>
    );
}
