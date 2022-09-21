import React from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    Image,
    FlexProps,
    useMediaQuery,
} from '@chakra-ui/react';
import { FiTrendingUp, FiMenu } from 'react-icons/fi';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { GiHandTruck } from 'react-icons/gi';

import { FaBoxes } from 'react-icons/fa';
import { IconType } from 'react-icons';

import ProductsTable from '../tables/productsTable';

interface LinkItemProps {
    name: string;
    icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'Dashboard', icon: FiTrendingUp },
    { name: 'Pedidos', icon: GiHandTruck },
    { name: 'Produtos', icon: FaBoxes },
    { name: 'Sair', icon: RiLogoutCircleLine },
];

export default function Dashboard() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return (
        <Box
            minH="100vh"
            bg="purple.400"
        >
            {isLargerThan768 ? (
                <Box
                    left="20%"
                    top="15%"
                    position={'absolute'}
                >
                    <Image
                        w="100%"
                        maxH="80vh"
                        src="/dashboard.svg"
                        alt=""
                    />
                </Box>
            ) : null}
            <Box
                left="30%"
                top="15%"
                position={'absolute'}
            >
                <ProductsTable />
            </Box>

            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav
                display={{ base: 'flex', md: 'none' }}
                onOpen={onOpen}
            />
        </Box>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Text
                    fontSize="2xl"
                    fontFamily="monospace"
                    fontWeight="bold"
                >
                    HRAdmin
                </Text>
                <CloseButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onClose}
                />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem
                    key={link.name}
                    icon={link.icon}
                >
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: string;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
        <Link
            href="#"
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius=" 0 15px 15px 0"
                role="group"
                cursor="pointer"
                _hover={{
                    bgGradient: 'linear(to-r, purple.200, purple.400)',
                    color: 'white',
                    transform: 'scale(1.2)',
                    fontWeight: 'bold',
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}
        >
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                fontSize="2xl"
                ml="8"
                fontFamily="monospace"
                fontWeight="bold"
            >
                HRAdmin
            </Text>
        </Flex>
    );
};
