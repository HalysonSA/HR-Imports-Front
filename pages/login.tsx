import { Flex } from '@chakra-ui/react'

import BannerLogin from '../components/LoginPage/banner'
import SignInLogin from '../components/LoginPage/signin'

const Login = () => {
    return (
        <Flex
            w={'100%'}
            minH="100vh"
            justifyContent={'center'}
            alignItems={'center'}
            bgGradient={'linear(180deg, #CE8DF5 8.33%, #8816CE 100%)'}
        >
            <Flex
                minW="90%"
                maxW="92%"
                height={['80vh', '90vh']}
                maxH="800px"
                bg="white"
                borderRadius={['0.5em', '1em', '1.5em', '2em']}
                direction={'row'}
            >
                <BannerLogin />
                <SignInLogin />
            </Flex>
        </Flex>
    )
}
export default Login;