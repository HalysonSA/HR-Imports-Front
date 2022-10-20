import {
    Box,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    Button,
    Image,
    Flex,
} from '@chakra-ui/react';
import React, { ReactElement } from 'react';

import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF } from 'react-icons/fa';
import { IoIosCard } from 'react-icons/io';
import { MdVerified } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

interface SocialProps {
    children?: ReactElement;
    label: string;
    href: string;
}

interface FooterInfoProps {
    title: string;
    icon: ReactElement;
    description: string;
}

const SocialButton = ({ children, label, href }: SocialProps) => {
    return (
        <Button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={12}
            h={12}
            cursor={'pointer'}
            as={'a'}
            href={href}
            target={'_blank'}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            // @ts-ignore
            _hover={
                label == 'Facebook'
                    ? {
                          bg: 'facebook.500',
                          color: 'white',
                      }
                    : label == 'Instagram'
                    ? {
                          bgGradient:
                              'linear(220deg, #7928CA, #FF0080, #F0E68C)',
                          color: 'white',
                      }
                    : null
            }
        >
            {children}
        </Button>
    );
};

const LinkFooter = ({ label, href }: SocialProps) => {
    return (
        <Link
            href={href}
            _hover={{ transform: 'scale(1.2)', color: 'blackAlpha.800' }}
        >
            {label}
        </Link>
    );
};

const InfoFooter = ({ icon, title, description }: FooterInfoProps) => {
    return (
        <Flex
            p="5"
            direction={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            flex="1"
        >
            {icon}
            <Flex direction={'column'}>
                <Text
                    fontSize={'xl'}
                    fontWeight={'bold'}
                >
                    {title}
                </Text>
                <Text fontWeight={'medium'}>{description}</Text>
            </Flex>
        </Flex>
    );
};

export default function Footer() {
    return (
        <Container
            maxW="1366px"
            bottom={'0'}
            bg="white"
            color="black"
        >
            <Flex
                minH="200px"
                direction={'row'}
                wrap={'wrap'}
                borderBottom={'1px'}
                borderColor={'gray.200'}
            >
                <InfoFooter
                    icon={<IoIosCard size={'70px'} />}
                    title={'Pagamentos'}
                    description={'Cartão de Crédito/Debito, Boleto e PIX'}
                />
                <InfoFooter
                    icon={<MdVerified size={'70px'} />}
                    title={'Garantia de Satisfação'}
                    description={'Garantia do Fabricante'}
                />
                <InfoFooter
                    icon={<TbTruckDelivery size={'70px'} />}
                    title={'Frete Grátis'}
                    description={'Entrega em Todo o Brasil'}
                />
            </Flex>
            <Container
                as={Stack}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}
            >
                <Image
                    w="80px"
                    h="80px"
                    src="/logo.svg"
                    alt="Logo"
                />
                <Stack
                    direction={'row'}
                    spacing={6}
                >
                    <Text
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            })
                        }
                        _hover={{
                            transform: 'scale(1.2)',
                            color: 'blackAlpha.800',
                        }}
                        cursor={'pointer'}
                    >
                        Inicio
                    </Text>
                    <LinkFooter
                        label="Sobre"
                        href="/about"
                    />
                    <LinkFooter
                        label="Contato"
                        href="/contact"
                    />
                </Stack>
            </Container>
            <Box
                borderStyle={'solid'}
                borderTopWidth={'1px'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
                <Container
                    as={Stack}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}
                >
                    <Text>©2022 HALLCORP.</Text>
                    <Stack
                        direction={'row'}
                        spacing={6}
                    >
                        <SocialButton
                            label={'Instagram'}
                            href={'https://www.instagram.com/'}
                        >
                            <FaInstagram size={20} />
                        </SocialButton>

                        <SocialButton
                            label={'Facebook'}
                            href={'https://www.facebook.com/'}
                        >
                            <FaFacebookF size={20} />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Container>
    );
}
