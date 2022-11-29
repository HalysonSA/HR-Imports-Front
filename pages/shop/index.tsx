import { Flex } from '@chakra-ui/react';

import Layout from '../../components/Layout/Layout';
import ShopFilters from '../../components/Shop/ShopFiltersPage/Filters';
import ShopHeader from '../../components/Shop/ShopFiltersPage/Header';
import ShopItems from '../../components/Shop/ShopItems';

const Shop = () => {
    return (
        <Layout>
            <ShopHeader />
            <Flex
                w="100%"
                direction={'column'}
                alignItems={'start'}
                mb={5}
                gap={3}
            >
                <ShopFilters />
                <ShopItems />
            </Flex>
        </Layout>
    );
};
export default Shop;
