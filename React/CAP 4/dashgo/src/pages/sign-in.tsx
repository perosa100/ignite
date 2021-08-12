import { Flex, Button, Stack, Box, Text } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from 'components/Form/Input'
import Logo from 'components/Header/Logo'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

const signInFormSchema = yup.object().shape({
  username: yup.string().required('Usuário obritório'),
  password: yup.string().required('Senha obrigatória')
})

type handleSignInForm = {
  username: string
  password: string
}
export default function SignIn() {
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)
  const routes = useRouter()
  const { push } = routes

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<handleSignInForm> = async (data) => {
    setLoading(true)

    const result = await signIn('credentials', {
      ...data,
      callbackUrl: 'http://localhost:3000/dashboard'
    })

    if (result?.url) {
      return push(result?.url)
    }
    setLoading(false)

    // jogar o erro
    setFormError('Usuario ou senha Invalida')
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      direction="column"
    >
      <Box>
        <Logo />
      </Box>
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            label="Usuário"
            type="text"
            error={formState.errors.username}
            {...register('username')}
          />
          <Input
            label="Senha"
            type="password"
            error={formState.errors.password}
            {...register('password')}
          />
        </Stack>
        {formError && (
          <Text color="red.500" my="2">
            {formError}
          </Text>
        )}
        <Button
          type="submit"
          mt={formError ? '2' : '8'}
          colorScheme="pink"
          size="lg"
          isLoading={loading}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
