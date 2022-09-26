import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import React from 'react';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }: any) => {
    return (
        <Box bg='gray.50'>
            <Navbar />

                {children}

            <Footer />
        </Box>
    );
};
export default Layout;
