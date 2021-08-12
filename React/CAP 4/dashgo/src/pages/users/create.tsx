import { useMutation } from '@apollo/client'
import {
  Box,
  Button,
  Flex,
  Heading,
  Divider,
  SimpleGrid,
  VStack,
  HStack,
  Text
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from 'components/Form/Input'
import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import { signIn } from 'next-auth/client'
import Link from 'next/link'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

interface SignInFormProps {
  username: string
  email: string
  password: string
  password_confirmation: string
}

const creteaUserFormSchema = yup.object().shape({
  username: yup.string().required('Usuário obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail Inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Senha muito curta'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
  const [formError, setFormError] = useState('')

  const { register, handleSubmit, formState, getValues } = useForm({
    resolver: yupResolver(creteaUserFormSchema)
  })
  console.log(
    '🚀 ~ file: create.tsx ~ line 47 ~ CreateUser ~ register',
    getValues('username')
  )

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) =>
      setFormError(
        err?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0]
          .message
      ),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          username: getValues('username'),
          password: getValues('password'),
          callbackUrl: 'http://localhost:3000/users'
        })
    }
  })

  const handleCreateUser: SubmitHandler<SignInFormProps> = async (data) => {
    await createUser({
      variables: {
        input: {
          username: data.username,
          email: data.email,
          password: data.password
        }
      }
    })
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar Usuarios
          </Heading>
          <Divider my="6" borderColor="gray.600" />

          <VStack spacing={['6', '8']}>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                label="Nome Completo"
                error={formState.errors.username}
                {...register('username')}
              />
              <Input
                label="E-Mail"
                type="email"
                error={formState.errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                label="Senha"
                type="password"
                error={formState.errors.password}
                {...register('password')}
              />
              <Input
                label="Confime a senha"
                type="password"
                error={formState.errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              {formError && (
                <Text color="red.500" my="2">
                  {formError}
                </Text>
              )}
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>

              <Button type="submit" colorScheme="green" isLoading={loading}>
                Cadastrar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
