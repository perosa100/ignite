import { Flex, Button, Heading, Stack } from '@chakra-ui/react'
import { Input } from 'components/Form/Input'

const Home = () => (
  <Flex w="100vw" h="100vh" align="center" justify="center">
    <Flex
      as="form"
      width="100%"
      maxW={360}
      bg="gray.600"
      p="8"
      borderRadius={8}
      flexDirection="column"
      alignItems="center"
    >
      <Heading marginBottom="8" justifyItems="center">
        Pagina de login
      </Heading>

      <Stack spacing="4" width="100%">
        <Input label="Usuário" name="username" />
        <Input label="Senha" name="password" />
      </Stack>

      <Button type="submit" mt="6" colorScheme="green" width="100%">
        Acessar
      </Button>
    </Flex>
  </Flex>
)

export default Home
