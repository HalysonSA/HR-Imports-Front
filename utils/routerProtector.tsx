import { Center, Image, Button } from '@chakra-ui/react'
import Link from 'next/link'

const notAuthorized = () => (
    <Center>
        <Image
            w="60%"
            minH="80vh"
            objectFit={'fill'}
            src={'/404.svg'}
            alt="ola"
        />
        <Button
            position={'absolute'}
            colorScheme={'transparent'}
            color="black"
            h="4em"
            w="11em"
            top="0"
            left={'0'}
            fontSize={'2xl'}
        >
            <Link href={'/'}>Voltar</Link>
        </Button>
    </Center>
)

export function withAuth(Component: any) {
    const a = Math.floor(Math.random() * 2) //teste de roteamento
    if (a !== 1) {
        return notAuthorized
    }
    return Component
}
