import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/Head'
import 'react-toastify/dist/ReactToastify.css'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import store from '../components/Redux/Storage'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <ChakraProvider>
                    <Header />
                    <Component {...pageProps} />
                </ChakraProvider>
            </Provider>
        </SessionProvider>
    )
}

export default MyApp
