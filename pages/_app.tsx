import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/Head'

import 'react-toastify/dist/ReactToastify.css'

import { Provider } from 'react-redux'
import store from '../components/Redux/Storage'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <Header />
                <Component {...pageProps} />
            </ChakraProvider>
        </Provider>
    )
}

export default MyApp
