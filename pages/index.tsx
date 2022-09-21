import NewProductSlider from '../components/Slide/NewProducts';
import Layout from '../components/Layout/Layout';
import Carousel from '../components/Slide/Index';

const Home = () => {
    return (
        <Layout>
            <Carousel />
            <NewProductSlider />
        </Layout>
    );
};

export default Home;
