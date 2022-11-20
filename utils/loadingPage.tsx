import { Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';
const LoadingPage = () => {
    return (
        <Center h={'60vh'}>
            <motion.div
                style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#6B46C1',
                }}
                animate={{
                    x: [-150, 150, -150],
                    scale: [1, 1.5, 1, 1.5, 1],
                    rotate: [270, 0, 270],
                    borderRadius: ['50%', '20%', '50%', '20%', '50%'],
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                }}
            />
        </Center>
    );
};
export default LoadingPage;
