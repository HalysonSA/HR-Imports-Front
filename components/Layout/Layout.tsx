import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import React from 'react';

const Layout = ({ children }: any) => {
    return (
        <>
            <Navbar />

                {children}

            <Footer />
        </>
    );
};
export default Layout;
