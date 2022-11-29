import {  Flex, Box, Image, useMediaQuery} from '@chakra-ui/react';
import SignUpRegister from '../components/RegisterPage/signup';

const SignUp = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return (
        <Flex
            w="100%"
            minH="100vh"
            bg="#6B13B0"
        >
            <SignUpRegister />

            {isLargerThan768 ? (
            <Box w={"60%"}>
                <Image
                    src="/register.svg"
                    alt="illustration"
                    h="100vh"
                />
            </Box>) : null}
        </Flex>
    );
};
export default SignUp;
