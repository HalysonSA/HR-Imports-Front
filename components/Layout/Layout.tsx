import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import React from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';

const Layout = ({ children }: any) => {
    return (
        <Box bg="white">
            <Navbar />
            <Container maxW="1500px">{children}</Container>
            <Box bg="purple.700">
                <Footer />
            </Box>
            
            <Flex h='50px' bg='black' alignItems={'center'} w='100%' pl='5'>
                <Text color="white">© 2022 Halyson. All rights reserved.</Text>
            </Flex>
        </Box>
    );
};
export default Layout;
