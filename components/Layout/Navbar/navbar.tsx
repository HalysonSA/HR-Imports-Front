import {
    Avatar,
    Box,
    Button,
    Center,
    Container,
    Flex,
    HStack,
    IconButton,
    Image,
    Input,
    InputGroup,
    Link,
    Menu,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Portal,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';

import { CloseIcon, HamburgerIcon, Search2Icon } from '@chakra-ui/icons';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { signOut, useSession } from 'next-auth/react';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { signInUser } from '../../../components/Redux/UserSlice';
import CartSideBar from '../../Cart/sidecart/sidebar';
import { cartIsOpen } from '../../Redux/CartSlice';

import { CartContext } from '../../../context/cart';

export type UserInfo = {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
};

export type UserType = {
    user: UserInfo;
};

export default function Navbar() {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const user = useSelector((state: UserType) => state.user);
    const router = useRouter();

    const { data: session } = useSession();

    const { totalQuantity } = useContext(CartContext);

    const [searchTerm, setSearchTerm] = useState('');

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

    function onSearch() {
        const searchRestored = router.query;

        router.push({
            pathname: '/shop',
            query: {
                ...searchRestored,
                search: searchTerm,
            },
        });
    }

    return (
        <Box
            w="100%"
            zIndex="100"
            top={0}
            position="sticky"
            bgColor="white"
        >
            <Container
                maxW="1500px"
                bg="white"
                px={2}
            >
                <Flex
                    h={'100px'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <HStack
                        spacing={8}
                        alignItems={'center'}
                    >
                        <Box
                            display={{ base: 'none', md: 'flex' }}
                            onClick={() => router.push('/')}
                            _hover={{ cursor: 'pointer' }}
                        >
                            <Image
                                w="60px"
                                h="60px"
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

                    <IconButton
                        colorScheme={'transparent'}
                        color="black"
                        size={'lg'}
                        p={0}
                        icon={
                            isOpen ? (
                                <CloseIcon />
                            ) : (
                                <HamburgerIcon
                                    w="25px"
                                    h="25px"
                                />
                            )
                        }
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />

                    <InputGroup maxW={['170px', '300px']}>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                onSearch();
                            }}
                        >
                            <Input
                                id="SearchBox"
                                type="text"
                                borderRadius={'10px 0 0 10px'}
                                noOfLines={1}
                                placeholder="O Que voc?? procura?"
                                focusBorderColor="purple.600"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </form>
                        <Button
                            onClick={() => onSearch()}
                            colorScheme="purple"
                            borderRadius={'0 10px 10px 0'}
                            color={'white'}
                            _hover={{
                                cursor: 'pointer',
                            }}
                        >
                            <Search2Icon />
                        </Button>
                    </InputGroup>
                    <Flex alignItems={'center'}>
                        <HStack>
                            <Menu>
                                <Popover>
                                    <PopoverTrigger>
                                        <Button
                                            display={{
                                                base: 'none',
                                                md: 'flex',
                                            }}
                                            as={Button}
                                            onClick={() => {
                                                onOpen();
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
                                        </Button>
                                    </PopoverTrigger>
                                    <Portal>
                                        <PopoverContent mt="8">
                                            <PopoverArrow bg="purple.600" />

                                            {session?.user || user.email ? (
                                                <PopoverHeader>
                                                    <Text
                                                        fontSize={'lg'}
                                                        fontWeight={'bold'}
                                                    >
                                                        Ol??,{' '}
                                                        {user.name ||
                                                            session?.user?.name}
                                                    </Text>
                                                </PopoverHeader>
                                            ) : null}

                                            <PopoverCloseButton
                                                size={'md'}
                                                bgColor="white"
                                                color={'purple.600'}
                                            />
                                            <PopoverBody>
                                                {session?.user || user.email ? (
                                                    <Stack fontSize={'lg'}>
                                                        <Link
                                                            _hover={{
                                                                color: 'purple.600',
                                                            }}
                                                            onClick={() =>
                                                                router.push(
                                                                    '/orders'
                                                                )
                                                            }
                                                        >
                                                            Meus Pedidos
                                                        </Link>
                                                        <Link
                                                            bg="transparent"
                                                            _hover={{
                                                                color: 'red',
                                                            }}
                                                            onClick={() =>
                                                                handleLogout()
                                                            }
                                                        >
                                                            Sair
                                                        </Link>
                                                    </Stack>
                                                ) : (
                                                    <Stack fontSize={'lg'}>
                                                        <Link
                                                            href="/login"
                                                            _hover={{
                                                                color: 'purple.600',
                                                            }}
                                                        >
                                                            Entrar
                                                        </Link>
                                                        <Link
                                                            href="/register"
                                                            bg="transparent"
                                                            _hover={{
                                                                color: 'purple.600',
                                                            }}
                                                        >
                                                            Cadastre-se
                                                        </Link>
                                                    </Stack>
                                                )}
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Portal>
                                </Popover>

                                <CartSideBar />
                            </Menu>
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
                        </HStack>
                    </Flex>
                </Flex>
                {/* Mobile Menu */}
                {isOpen ? (
                    <Box
                        pl={2}
                        pb={2}
                        display={{ md: 'none' }}
                    >
                        <Stack
                            as={'nav'}
                            spacing={4}
                            fontSize={'lg'}
                            fontWeight={'bold'}
                            textTransform={'uppercase'}
                        >
                            <Link href="/">In??cio</Link>
                            <Link href="/shop">Nossos produtos</Link>
                            <Link href="/orders">Meus Pedidos</Link>
                            <Link href="/about">Sobre</Link>
                        </Stack>
                    </Box>
                ) : null}
            </Container>
        </Box>
    );
}
