import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import React from 'react';
import { Box, Container } from '@chakra-ui/react';

const Layout = ({ children }: any) => {
    return (
        <Box bg="white">
            <Navbar />
            <Container maxW="1366px">{children}</Container>
            <Footer />
        </Box>
    );
};
export default Layout;
