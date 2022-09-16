import { Box, Text, Button, Center, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
export default function NotFound() {
    const router = useRouter()

    return (
        <Center
            minH="100vh"
        >
            <Box
                textAlign="center"
                zIndex={99}
            >
                <Text
                    display="inline-block"
                    fontSize={['2xl', '3xl', '6xl']}
                    bgGradient="linear(to-r, purple.400, purple.600)"
                    backgroundClip="text"
                >
                    404
                </Text>
                <Text
                    fontSize="18px"
                    fontWeight={600}
                    mt={3}
                    mb={2}
                >
                    Página não encontrada
                </Text>
                <Text mb={6} color='gray.500'>
                    Essa página não existe, para voltar a página inicial
                    clique no botão abaixo.
                </Text>

                <Button
                    colorScheme="purple"
                    onClick={() => router.push('/')}
                    bgGradient="linear(to-r, purple.400, purple.500, purple.600)"
                    color="white"
                    variant="solid"
                >
                    Voltar ao inicio
                </Button>
            </Box>
        </Center>
    )
}
