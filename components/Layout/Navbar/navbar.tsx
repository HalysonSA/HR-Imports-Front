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
} from '@chakra-ui/react'

import { useRouter } from 'next/router'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import { useSession, signOut } from 'next-auth/react'

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()
    const { data: session } = useSession()

    return (
        <Box
            bg="white"
            px={10}
        >
            <Flex
                h={'70px'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <IconButton
                    bg="transparent"
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack
                    spacing={8}
                    alignItems={'center'}
                >
                    <Box>
                        <Image
                            w="40px"
                            src="/crown.svg"
                            alt="Logo"
                        />
                    </Box>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Text
                            cursor={'pointer'}
                            fontSize={'lg'}
                            fontWeight={'bold'}
                        >
                            Categorias
                        </Text>
                        <Text
                            cursor={'pointer'}
                            fontSize={'lg'}
                            fontWeight={'bold'}
                        >
                            Sobre
                        </Text>
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
                                ? 'Olá, ' + session.user.name
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
                                    src={session ? session?.user?.image : ''}
                                    referrerPolicy={'no-referrer'}
                                />
                            </MenuButton>
                            <MenuList>
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
                                    src="/shopping-bag.svg"
                                    alt="bag"
                                />
                                <Center
                                    w="15px"
                                    h="15px"
                                    top="15px"
                                    right="35px"
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
                        <Link>Categorias</Link>
                        <Link>Sobre</Link>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    )
}
