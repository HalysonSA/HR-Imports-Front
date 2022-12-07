import { Flex, Text } from '@chakra-ui/react';
import Header from '../components/Head';
import Layout from '../components/Layout/Layout';
import Carousel from '../components/Slide/index';
import NewProductSlider from '../components/Slide/NewProducts';

const Home = () => {
    return (
        <Layout>
            <Header
                ogTitle="HR Imports - Produtos Importados"
                description="Produtos importados de qualidade e preço justo"
                url="https://halyson-sand.vercel.app"
                image={'https://halyson-sand.vercel.app/logo.png'}
            />
            <Carousel />
            <Flex
                bg="purple.600"
                justifyContent={'center'}
                alignItems={'center'}
                my={5}
            >
                <Text
                    color={'white'}
                    fontSize={['xl', '2xl']}
                    fontWeight="bold"
                    px={3}
                >
                    Novidades
                </Text>
            </Flex>
            <NewProductSlider />
            <Flex
                bg="purple.600"
                justifyContent={'center'}
                alignItems={'center'}
                my={5}
            >
                <Text
                    color={'white'}
                    fontSize={['xl', '2xl']}
                    fontWeight="bold"
                    px={3}
                >
                    Destaques
                </Text>
            </Flex>
            <NewProductSlider />
            <Flex
                bg="purple.600"
                justifyContent={'center'}
                alignItems={'center'}
                my={5}
            >
                <Text
                    color={'white'}
                    fontSize={['xl', '2xl']}
                    fontWeight="bold"
                    px={3}
                >
                    Mais populares
                </Text>
            </Flex>
            <NewProductSlider />
        </Layout>
    );
};

export default Home;
