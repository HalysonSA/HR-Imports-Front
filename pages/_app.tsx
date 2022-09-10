import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Head>
                <title>HR Moda</title>
                <meta
                    name="description"
                    content="Roupas para atividades físicas"
                />
                <meta
                    property="og:title"
                    content="HR Moda - Roupas para atividades físicas"
                />
                <meta
                    property="og:description"
                    content="Roupas de alta qualidade para atividades físicas"
                />
                <meta
                    property="og:url"
                    content="https://hallfaste.com"
                />
                <meta
                    property="og:type"
                    content="website"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
