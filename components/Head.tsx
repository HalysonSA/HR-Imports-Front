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
            key={'description'}
            name="description"
            content={
                ogDescription
                    ? ogDescription
                    : 'Produtos de qualidade e preço justo'
            }
        />
        <meta
            name="theme-color"
            content="#6B46C1"
        ></meta>
        <meta
            key={'og:title'}
            property="og:title"
            content={ogTitle ? ogTitle : 'HR Imports - Produtos Importados'}
        />
        <meta
            key={'og:description'}
            property="og:description"
            content={
                ogDescription
                    ? ogDescription
                    : 'Produtos de qualidade e preço justo'
            }
        />
        <meta
            key={'og:image'}
            property="og:image"
            content={ogImage ? ogImage : 'https://halyson-sand.vercel.app/'}
        />
        <meta
            key={'og:url'}
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
