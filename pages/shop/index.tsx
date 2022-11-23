import { Flex } from '@chakra-ui/react';

import Layout from '../../components/Layout/Layout';
import ShopFilters from '../../components/Shop/shopFiltersPage/filters';
import ShopHeader from '../../components/Shop/shopFiltersPage/header';
import ShopItems from '../../components/Shop/shopItems';

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
