import { Flex, Image } from '@chakra-ui/react'

const BannerSignUp = () => {
    return (
        <Flex
            w={['100%', '60%']}
            maxH="100vh"
            flexDir="column"
            justifyContent="center"
            alignItems="end"
        >
            <Image
                w="100%"
                h="100%"
                src={'/SocialHand.gif'}
                alt="social"
            />
        </Flex>
    )
}
export default BannerSignUp
