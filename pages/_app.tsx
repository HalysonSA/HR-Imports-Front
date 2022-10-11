import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '../components/Head';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import store from '../components/Redux/Storage';

import { CartProvider } from '../context/cart';

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
            <CartProvider>
                <Provider store={store}>
                    <ChakraProvider>
                        <Header />
                        <Component {...pageProps} />
                    </ChakraProvider>
                </Provider>
            </CartProvider>
        </SessionProvider>
    );
}

export default MyApp;
