import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import React from 'react';
import {
    Box,
    Container,
    Flex,
    Text,
    Input,
    Center,
    Stack,
    Button,
    HStack,
} from '@chakra-ui/react';

const Layout = ({ children }: any) => {
    return (
        <Box bgColor="white">
            <Navbar />
            <Container maxW="1500px">{children}</Container>

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
                            placeholder="email@gmail.com"
                        />
                        <Button color='purple.700' fontWeight={'bold'}>Enviar</Button>
                    </HStack>
                </Stack>
            </Center>
            <Box bg="purple.600">
                <Footer />
            </Box>

            <Flex
                h="50px"
                bg="black"
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
