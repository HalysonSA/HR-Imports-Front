import NewProductSlider from '../components/Slide/NewProducts'
import { Box } from '@chakra-ui/react'
import Layout from '../components/Layout/Layout'
import Carousel from '../components/Slide/Index'
const Home = () => {
    return (
        <Layout>
            <Box minH={'100VH'}>
                <Carousel />
                <NewProductSlider />
            </Box>
        </Layout>
    )
}

export default Home
