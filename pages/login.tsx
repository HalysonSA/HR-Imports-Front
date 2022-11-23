import { Flex } from '@chakra-ui/react';

import BannerLogin from '../components/LoginPage/banner';
import SignInLogin from '../components/LoginPage/signin';

const Login = () => {
    return (
        <Flex
            w={'100%'}
            minH="100vh"
            justifyContent={'center'}
            alignItems={'center'}
            direction={'row'}
        >
            <BannerLogin />
            <SignInLogin />
        </Flex>
    );
};
export default Login;
