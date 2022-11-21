import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Head';
import store from '../components/Redux/Storage';
import '../styles/globals.css';

import { CartProvider } from '../context/cart';
import { CustomerProvider } from '../context/customer';

import type { NextComponentType } from 'next';
import { Session } from 'next-auth';

type AppProps = {
    Component: NextComponentType;
    pageProps: {
        session: Session;
    };
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <CustomerProvider>
                <CartProvider>
                    <Provider store={store}>
                        <ChakraProvider>
                            <Header />
                            <Component {...pageProps} />
                        </ChakraProvider>
                    </Provider>
                </CartProvider>
            </CustomerProvider>
        </SessionProvider>
    );
}

export default MyApp;
