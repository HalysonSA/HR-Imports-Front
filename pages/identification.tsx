import { Box, Center, Stack } from '@chakra-ui/react';
import StatusBar from '../components/Cart/cartcomponents/statusBar';
import FormEntries from '../components/Cart/identification/formEntries';
import Layout from '../components/Layout/Layout';

const Identification = () => {
    return (
        <Layout>
            {/*<RouterGuard>*/}
            <Stack
                spacing={5}
                minH="800px"
            >
                <Center m={5}>
                    <StatusBar />
                </Center>

                <Center mb={5}>
                    <Box
                        w="100%"
                        maxW="800px"
                    >
                        <FormEntries />
                    </Box>
                </Center>
            </Stack>
            {/*</RouterGuard>*/}
        </Layout>
    );
};
export default Identification;
