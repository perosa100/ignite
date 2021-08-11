import {
  Box,
  Button,
  Flex,
  Heading,
  Divider,
  SimpleGrid,
  VStack,
  HStack
} from '@chakra-ui/react'
import { Sidebar } from 'components/Sidebar'
import { Header } from 'components/Header'
import { Input } from 'components/Form/Input'
import Link from 'next/link'
export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={['6', '8']}>
          <Heading size="lg" fontWeight="normal">
            Criar Usuarios
          </Heading>
          <Divider my="6" borderColor="gray.600" />

          <VStack spacing={['6', '8']}>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="name" label="Nome Completo" />
              <Input name="email" label="E-Mail" type="email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="passswrod" label="Senha" type="password" />
              <Input
                name="password_confirmation"
                label="Confime a senha"
                type="password"
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="green">Cadastrar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
