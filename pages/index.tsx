import NewProductSlider from '../components/Slide/NewProducts';
import Layout from '../components/Layout/Layout';
import Carousel from '../components/Slide/Index';
import { Divider, Flex, Text} from '@chakra-ui/react';

const Home = () => {
    return (
        <Layout>
            <Carousel />
            <Flex justifyContent={'center'} alignItems={'center'} my={5}>
                <Divider mr={3} orientation='horizontal' />
                <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    color="purple.600"
                >
                    Novidades
                </Text>
                <Divider ml={3} orientation="horizontal" />
            </Flex>
            <NewProductSlider />
        </Layout>
    );
};

export default Home;
