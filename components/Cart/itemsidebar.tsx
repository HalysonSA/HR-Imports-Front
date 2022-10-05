import {
    Flex,
    Image,
    Text,
    Button,
    Stack,
    Box,
    HStack,
    Center,
} from '@chakra-ui/react';
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';
import { FiTrash } from 'react-icons/fi';

const ItemSideBar = () => {
    return (
        <Flex
            border={'1px solid'}
            borderColor="purple.400"
            direction={'row'}
            minW={'200px'}
            bg="white"
            m="4"
            my="2"
        >
            <Image
                alt=""
                src="data:image/jpeg;base64,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"
                w="120px"
                h="120px"
                objectFit={'cover'}
            />

            <Flex
                my="2"
                mx="3"
                direction={'column'}
                w="100%"
            >
                <Stack>
                    <Box>
                        <Text
                            fontWeight={'semibold'}
                            fontSize={'lg'}
                        >
                            Titulo
                        </Text>
                        <Text
                            fontWeight={'semibold'}
                            fontSize={'lg'}
                        >
                            R$ 99,99
                        </Text>
                    </Box>
                    <Box>
                        <HStack spacing={2}>
                            <Button
                                colorScheme={'transparent'}
                                color="black"
                                p="0"
                                _hover={{ color: 'purple.400' }}
                            >
                                <MdRemoveCircleOutline size={20} />
                            </Button>
                            <Text fontWeight={'bold'}>1</Text>
                            <Button
                                colorScheme={'transparent'}
                                color="black"
                                p="0"
                                _hover={{ color: 'purple.400' }}
                            >
                                <MdAddCircleOutline size={20} />
                            </Button>
                        </HStack>
                    </Box>
                </Stack>
            </Flex>
            <Center p="5">
                <Button
                    bg="transparent"
                    _hover={{ color: 'red', bg: 'white', cursor: 'pointer' }}
                    _active={{ color: 'red', bg: 'white', transform: 'scale(1.1)' }}
                >
                    <FiTrash size={20} />
                </Button>
            </Center>
        </Flex>
    );
};
export default ItemSideBar;
