import Head from 'next/head';

interface Props {
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
}

const Header = ({ ogTitle, ogDescription, ogImage, ogUrl }: Props) => (
    <Head>
        <title>HR Imports</title>
        <link
            rel="apple-touch-icon"
            href=""
        ></link>
        <meta
            name="description"
            content={'Produtos de qualidade e preço justo'}
        />
        <meta
            name="theme-color"
            content="#6B46C1"
        ></meta>
        <meta
            property="og:title"
            content={ogTitle ? ogTitle : 'HR Imports - Produtos Importados'}
        />
        <meta
            property="og:description"
            content={
                ogDescription
                    ? ogDescription
                    : 'Produtos de qualidade e preço justo'
            }
        />
        <meta
            property="og:url"
            content={ogUrl ? ogUrl : 'https://halyson-sand.vercel.app/'}
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
);
export default Header;
