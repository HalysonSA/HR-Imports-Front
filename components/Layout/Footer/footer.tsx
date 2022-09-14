import {
    Box,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    Button,
    Image,
} from '@chakra-ui/react'

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const SocialButton = ({ children, label, href }) => {
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
            _hover={
                label == 'Twitter'
                    ? {
                          bg: 'twitter.500',
                          color: 'white',
                      }
                    : label == 'Instagram'
                    ? {
                          bgGradient:
                              'linear(220deg, #7928CA, #FF0080, #F0E68C)',
                          color: 'white',
                      }
                    : label == 'Youtube'
                    ? {
                          bg: 'red',
                          color: 'white',
                      }
                    : null
            }
        >
            {children}
        </Button>
    )
}

const LinkFooter = ({ label, href }) => {
    return (
        <Link
            href={href}
            _hover={{ transform: 'scale(1.2)', color: 'blackAlpha.800' }}
        >
            {label}
        </Link>
    )
}

export default function Footer() {
    return (
        <Box
            bottom={'0'}
            bg="white"
            color="black"
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}
            >
                <Image
                    src="/Logo.svg"
                    alt="Logo"
                />
                <Stack
                    direction={'row'}
                    spacing={6}
                >
                    <LinkFooter
                        label="Inicio"
                        href="/"
                    />
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
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
                <Container
                    as={Stack}
                    maxW={'6xl'}
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
                            href={'#'}
                        >
                            <FaInstagram size={20} />
                        </SocialButton>

                        <SocialButton
                            label={'Twitter'}
                            href={'#'}
                        >
                            <FaTwitter size={20} />
                        </SocialButton>

                        <SocialButton
                            label={'Youtube'}
                            href={'#'}
                        >
                            <FaYoutube size={30} />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}
