import { Flex, Text } from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';
import Carousel from '../components/Slide/Index';
import NewProductSlider from '../components/Slide/NewProducts';

const Home = () => {
    return (
        <Layout>
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
