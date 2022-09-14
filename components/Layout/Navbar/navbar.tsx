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
    MenuDivider,
    useDisclosure,
    Stack,
} from '@chakra-ui/react'

import { useRouter } from 'next/router'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()

    return (
        <Box
            bg="white"
            px={4}
        >
            <Flex
                h={'70px'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <IconButton
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
                    <Box>Logo</Box>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Link>Categorias</Link>
                        <Link>Sobre</Link>
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}
                        >
                            <Avatar
                                size={'md'}
                                src={''}
                            />
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => router.push('/login')}>Login||Nome do usuario</MenuItem>
                            <MenuItem onClick={() => router.push('/orders')}>Pedidos</MenuItem>
                            <MenuDivider />
                            <MenuItem> Sair|| nada </MenuItem>
                        </MenuList>
                    </Menu>
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
