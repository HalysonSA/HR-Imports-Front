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

import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const { data: session } = useSession();

    return (
        <Box
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
                            w="48px"
                            h="48px"
                            src="/crown.svg"
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
                            _hover={{
                                textDecoration: 'none',
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
                                textDecoration: 'none',
                                transform: 'scale(1.1)',
                            }}
                        >
                            Sobre
                        </Link>
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <HStack>
                        <Text
                            fontSize={'lg'}
                            fontWeight={'semi-bold'}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {session
                                ? 'Olá, ' + session?.user?.name
                                : 'Entre ou cadastre-se'}
                        </Text>
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
                                    src={session?.user?.image || undefined}
                                    referrerPolicy={'no-referrer'}
                                    name={session?.user?.name || undefined}
                                />
                            </MenuButton>
                            <MenuList zIndex={99}>
                                {session ? (
                                    <>
                                        <MenuItem>
                                            {session?.user?.name}
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() =>
                                                router.push('/orders')
                                            }
                                        >
                                            Pedidos
                                        </MenuItem>
                                        <MenuItem
                                            bg="transparent"
                                            _hover={{
                                                bg: 'red',
                                                color: 'white',
                                            }}
                                            onClick={() => signOut()}
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
                            <Spacer />
                            <Flex
                                cursor={'pointer'}
                                onClick={() => router.push('/cart')}
                            >
                                <Image
                                    w="34px"
                                    h="34px"
                                    src="/shopping-bag.svg"
                                    alt="bag"
                                />
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
