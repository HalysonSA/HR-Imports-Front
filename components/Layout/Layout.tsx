import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    HStack,
    Input,
    Stack,
    Text,
} from '@chakra-ui/react';
import Footer from './Footer/footer';
import Navbar from './Navbar/navbar';

const Layout = ({ children }: any) => {
    const handleKeyDown = (event: any) => {
        event.preventDefault();
        if (event.key === '/' || (event.ctrlKey && event.key === 'k')) {
            document.getElementById('SearchBox')?.focus();
        }
    };

    return (
        <Box
            bgColor="white"
            onKeyDownCapture={handleKeyDown}
        >
            <Navbar />
            <Container
                maxW="1500px"
                p="2"
            >
                {children}
            </Container>

            <Center
                bgColor={'purple.700'}
                p={'5'}
            >
                <Stack>
                    <Text
                        color="white"
                        fontSize="2xl"
                    >
                        Quer ficar por dentro das novidades?
                    </Text>
                    <HStack>
                        <Input
                            w={'100%'}
                            variant={'outline'}
                            color={'white'}
                            focusBorderColor={'white'}
                            placeholder="Insira seu e-mail"
                            _placeholder={{ opacity: 1, color: 'white' }}
                        />
                        <Button
                            color="purple.700"
                            bgColor={'white'}
                            fontWeight={'bold'}
                        >
                            Enviar
                        </Button>
                    </HStack>
                </Stack>
            </Center>

            <Box bg="purple.600">
                <Footer />
            </Box>

            <Flex
                h="50px"
                bg="purple.900"
                alignItems={'center'}
                w="100%"
                pl="5"
            >
                <Text color="white">© 2022 Halyson. All rights reserved.</Text>
            </Flex>
        </Box>
    );
};
export default Layout;
