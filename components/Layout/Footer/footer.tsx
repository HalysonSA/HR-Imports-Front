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
    Divider,
    HStack,
    Center,
} from '@chakra-ui/react';
import React, { ReactElement } from 'react';

import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF } from 'react-icons/fa';
import { IoIosCard } from 'react-icons/io';
import { MdVerified } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';

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
            bg={useColorModeValue('white', 'gray.100')}
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
        <Box
            w="100%"
            bottom={'0'}
            bg="white"
            borderTopWidth={'1px'}
            color="black"
        >
            <Container maxW={'1366px'}>
                <Flex
                    minH="200px"
                    direction={'row'}
                    wrap={'wrap'}
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
            </Container>
            <Divider />

            <Flex
                minH="220px"
                py="5"
                gap={'20%'}
                px="10"
                wrap={'wrap'}
                direction={['column', 'column', 'column', 'row', 'row']}
                bg="purple.500"
            >
                <Box mt="2">
                    <Stack>
                        <Text
                            color="white"
                            fontWeight={'bold'}
                            fontSize={'xl'}
                        >
                            Institucional
                        </Text>
                        <Stack color={'whiteAlpha.800'}>
                            <Text>Política de Privacidade</Text>
                            <Text>Perguntas Frequentes</Text>
                        </Stack>
                    </Stack>
                </Box>
                <Stack mt="2">
                    <Text
                        color="white"
                        fontWeight={'bold'}
                        fontSize={'xl'}
                    >
                        Minha conta
                    </Text>
                    <Text color={'whiteAlpha.800'}>Meus pedidos</Text>
                </Stack>

                <Stack mt="2">
                    <Text
                        color="white"
                        fontWeight={'bold'}
                        fontSize={'xl'}
                    >
                        Atendimento
                    </Text>
                    <Stack color="whiteAlpha.800">
                        <HStack>
                            <BsWhatsapp size={20} />
                            <Text>(99) 9 9999-9099</Text>
                        </HStack>
                        <HStack>
                            <MdOutlineMailOutline size={20} />
                            <Text>teste@gmail.com</Text>
                        </HStack>
                    </Stack>
                </Stack>

                <Stack mt="2">
                    <Text
                        color="white"
                        fontWeight={'bold'}
                        fontSize={'xl'}
                    >
                        Redes sociais
                    </Text>
                    <Stack
                        direction={'row'}
                        spacing={3}
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
                </Stack>
            </Flex>
            <Stack
                minH="200px"
                w="100%"
                bg="purple.500"
                px="10"
                py="5"
                borderTopWidth={'1px'}
            >
                <Text
                    color="white"
                    fontWeight={'bold'}
                    fontSize={'2xl'}
                >
                    Formas de Pagamento
                </Text>
                <Flex
                    direction={'row'}
                    gap="2"
                    wrap={'wrap'}
                >
                    <Image
                        h="30px"
                        w="60px"
                        src="/visa.png"
                        alt="Visa"
                    />
                    <Image
                        h="30px"
                        w="60px"
                        src="/mastercard.png"
                        alt="Mastercard"
                    />
                    <Image
                        bg="white"
                        h="30px"
                        w="60px"
                        src="/pix.png"
                        alt="Pix"
                    />
                    <Image
                        h="30px"
                        w="60px"
                        src="/boleto.png"
                        alt="Boleto"
                    />
                    <Image
                        h="30px"
                        w="60px"
                        src="/mercadopago.png"
                        alt="Mercado Pago"
                    />
                </Flex>
            </Stack>

            <Box
                bg="purple.900"
                color="white"
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
                <Box
                    as={Stack}
                    py={4}
                    pl={4}
                >
                    <Text fontSize={'sm'}>
                        ©2022 HALLCORP. Todos os direitos reservados.
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}
