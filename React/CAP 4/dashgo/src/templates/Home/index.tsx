import { Flex, Button, Heading, Stack } from '@chakra-ui/react'
import { Input } from 'components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  function handleSignIn() {}

  return (
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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Heading marginBottom="8" justifyItems="center">
          Pagina de login
        </Heading>

        <Stack spacing="4" width="100%">
          <Input
            type="username"
            label="Usuário"
            /*      error={formState.errors.email} */
            {...register('username')}
          />
          <Input
            type="password"
            label="Senha"
            /*    error={formState.errors.email} */
            {...register('password')}
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="green" width="100%">
          Acessar
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
