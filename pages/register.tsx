import { Center, Flex, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import BannerSignUp from '../components/RegisterPage/banner'
import SignUpRegister from '../components/RegisterPage/signup'

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
                bg="#6B13B0"
                bgSize="cover"
                bgRepeat="no-repeat"
            >
                {isLargerThan1280 ? null : (
                    <Image
                        src="/SocialHand.gif"
                        layout="fill"
                        width={'100%'}
                        height={'100%'}
                        objectFit="cover"
                        alt="Social Hand"
                    />
                )}
                <SignUpRegister />
            </Center>
            {isLargerThan1280 ? <BannerSignUp /> : null}
        </Flex>
    )
}
export default SignUp
