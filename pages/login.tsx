import { Flex } from '@chakra-ui/react';

import BannerLogin from '../components/LoginPage/Banner';
import SignInLogin from '../components/LoginPage/SignIn';

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
