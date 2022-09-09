import { Center, Flex, useMediaQuery } from '@chakra-ui/react'

import BannerSignUp from '../components/ResgisterPage/banner'
import SignUpRegister from '../components/ResgisterPage/signup'

const SignUp = () => {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

    return (
        <Flex
            w="100%"
            minH="100vh"
            h="auto"
            bg="#6B13B0"
        >
            <Center
                w={isLargerThan1280 ? '40%' : '100%'}
                bgImage={isLargerThan1280 ? '#6B13B0' : 'url(/Socialhand.gif)'}
                bgSize="cover"
                bgRepeat="no-repeat"
            >
                <SignUpRegister />
            </Center>
            {isLargerThan1280 ? <BannerSignUp /> : null}
        </Flex>
    )
}
export default SignUp
