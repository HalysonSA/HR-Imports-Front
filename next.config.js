/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    devIndicators: {
        buildActivity: false,
    },
    images:{
        domains: ['images.kabum.com.br','images-americanas.b2w.io','m.media-amazon.com']
    }
};

module.exports = nextConfig;
