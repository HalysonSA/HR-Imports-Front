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
    HStack,
    Spacer,
} from '@chakra-ui/react';
import React, { ReactElement } from 'react';

import {
    FaInstagram,
    FaYoutube,
    FaFacebookF,
    FaWhatsapp,
} from 'react-icons/fa';

interface SocialProps {
    children?: ReactElement;
    label: string;
    href: string;
}

interface FooterInfoProps {
    title: string;
    link: string;
}

const SocialButton = ({ children, href }: SocialProps) => {
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
            _hover={{
                transform: 'scale(1.1)',
                bg: useColorModeValue('gray.100', 'gray.900'),
                transition: 'all 0.2s ease',
            }}
        >
            {children}
        </Button>
    );
};

const FooterInfo = ({ title, link }: FooterInfoProps) => {
    return (
        <Link
            color="whiteAlpha.900"
            href={link}
            fontSize={'lg'}
            fontWeight={'medium'}
            _hover={{
                color: 'white',
                transform: 'translateX(5px)',
                transition: 'all 0.2s ease-in-out',
            }}
        >
            {title}
        </Link>
    );
};

const PaymentMethod = (props: { image: string; alt: string }) => {
    return (
        <>
            <Image
                bg="white"
                h="45px"
                w="72px"
                src={props.image}
                alt={props.alt}
            />
        </>
    );
};
export default function Footer() {
    return (
        <Container
            w="100%"
            maxW="1500px"
            bgColor={'purple.600'}
            bottom={'0'}
        >
            <Flex
                justifyContent={'space-between'}
                wrap={'wrap'}
                alignContent={'center'}
                py={['4', '10']}
                color={'white'}
                fontSize={'md'}
            >
                <HStack my="5">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        w="80px"
                        h="80px"
                    />
                    <Spacer w={'30px'} />
                    <Stack >
                        <FooterInfo
                            title={'Inicio'}
                            link={'/'}
                        />
                        <FooterInfo
                            title={'Nossos produtos'}
                            link={'/shop'}
                        />
                        <FooterInfo
                            title={'Sobre nós'}
                            link={'/about'}
                        />
                        <FooterInfo
                            title={'Termos de uso'}
                            link={'/terms/use'}
                        />
                        <FooterInfo
                            title={'Política de privacidade'}
                            link={'terms/privacy'}
                        />
                    </Stack>
                </HStack>
                <Stack my="5">
                    <Text
                        fontSize={'md'}
                        fontWeight={'bold'}
                    >
                        Formas de pagamento
                    </Text>
                    <HStack
                        wrap={'wrap'}
                        spacing={0}
                        gap={'10px'}
                    >
                        <PaymentMethod
                            image={'/visa.png'}
                            alt={'Visa'}
                        />
                        <PaymentMethod
                            image={'/mastercard.png'}
                            alt={'Mastercard'}
                        />
                        <PaymentMethod
                            image={'/boleto.png'}
                            alt={'Boleto'}
                        />

                        <PaymentMethod
                            image={'/pix.png'}
                            alt={'pix'}
                        />
                    </HStack>
                </Stack>
                <Stack my="5">
                    <Text
                        fontSize={'md'}
                        fontWeight={'bold'}
                    >
                        Central de atendimento
                    </Text>
                    <HStack>
                        <SocialButton
                            label={'Whatsapp'}
                            href={
                                'https://api.whatsapp.com/send?phone=5584999999999&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido.'
                            }
                        >
                            <FaWhatsapp
                                fill="black"
                                size={20}
                            />
                        </SocialButton>
                    </HStack>
                    <Text
                        fontSize={'md'}
                        fontWeight={'bold'}
                    >
                        Redes sociais
                    </Text>
                    <HStack>
                        <SocialButton
                            label={'Facebook'}
                            href={'https://facebook.com/'}
                        >
                            <FaFacebookF
                                fill="black"
                                size={20}
                            />
                        </SocialButton>
                        <SocialButton
                            label={'Instagram'}
                            href={'https://instagram.com/'}
                        >
                            <FaInstagram
                                fill="black"
                                size={20}
                            />
                        </SocialButton>
                        <SocialButton
                            label={'Youtube'}
                            href={'https://youtube.com/'}
                        >
                            <FaYoutube
                                fill="black"
                                size={20}
                            />
                        </SocialButton>
                    </HStack>
                </Stack>
            </Flex>
        </Container>
    );
}
