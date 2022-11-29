import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    useDisclosure,
    Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const LoginAlert = (modalOpen: { modalOpen: boolean }) => {
    const { onClose } = useDisclosure();

    const [isOpenModal, setIsOpenModal] = useState(modalOpen.modalOpen);

    const user = useSelector((state: any) => state.user);

    return (
        <>
            <Modal
                onClose={onClose}
                isOpen={isOpenModal}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textTransform={'uppercase'}>
                        login necessário
                    </ModalHeader>
                    <ModalBody>
                        <Stack>
                            {user.accountType === 'social' ? (
                                <Text>
                                    Para continuar, é necessário possuir uma
                                    conta com o mesmo email de sua rede social.
                                </Text>
                            ) : (
                                <Text>
                                    Para continuar é preciso realizar o login.
                                </Text>
                            )}
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme={'purple'}
                            onClick={() => (location.href = '/login')}
                        >
                            Continuar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
