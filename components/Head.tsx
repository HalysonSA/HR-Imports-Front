import Head from 'next/head';

interface Props {
    description: string;
    url: string;
    image: string;
    ogTitle: string;
    children?: React.ReactNode;
}

const Header = ({ description, url, image, ogTitle, children }: Props) => (
    <Head>
        <title>HR Imports</title>
        <link
            rel="apple-touch-icon"
            href=""
        ></link>
        <meta
            name="description"
            content={description}
        />
        <meta
            name="theme-color"
            content="#6B46C1"
        ></meta>
        <meta
            property="og:title"
            content={ogTitle}
        />
        <meta
            property="og:description"
            content={description}
        />
        <meta
            property="og:image"
            content={image}
        />
        <meta
            property="og:url"
            content={url}
        />
        <meta
            property="og:type"
            content="website"
        />
        <link
            rel="icon"
            href="/favicon.ico"
        />
        {children}
    </Head>
);
export default Header;
