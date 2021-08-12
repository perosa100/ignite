import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Text,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from '@chakra-ui/react'
import { Header } from 'components/Header'
import Pagination from 'components/Pagination'
import { Sidebar } from 'components/Sidebar'
import { QueryUsersAll } from 'graphql/generated/QueryUsersAll'
import { QUERY_USERS_ALL } from 'graphql/queries/allUsers'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import { RiAddLine, RiEditLine } from 'react-icons/ri'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'

type UserListProps = {
  data: QueryUsersAll
}

export default function UserList({ data }: UserListProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontSize="normal">
              Lista de usuarios
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha" variant="striped">
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" width="8">
                  {/*   <Checkbox colorScheme="pink" /> */}
                </Th>
                <Th>Usuario</Th>
                {isWideVersion && <Th>Data de Cadastro</Th>}
                <Th>Opções</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.users.map((user) => (
                <>
                  <Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme="pink" />
                    </Td>

                    <Td>
                      <Box>
                        <Text fontWeight="bold"> {user.username} </Text>
                        <Text fontSize="sm" color="gray.300">
                          {user.email}
                        </Text>
                      </Box>
                    </Td>

                    <Td>
                      <Box>
                        {isWideVersion && <Text> {user.created_at} </Text>}
                      </Box>
                    </Td>
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="orange"
                        leftIcon={<Icon as={RiEditLine} />}
                      >
                        {isWideVersion && 'Editar'}
                      </Button>
                    </Td>
                  </Tr>
                </>
              ))}
            </Tbody>
          </Table>
          <Pagination
            totalCountOfRegister={200}
            currentPage={5}
            onPageChange={() => {}}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)
  const { data } = await apolloClient.query<QueryUsersAll>({
    query: QUERY_USERS_ALL
  })
  console.log(
    '🚀 ~ file: index.tsx ~ line 187 ~ getServerSideProps ~ data',
    data
  )
  return {
    props: {
      session,
      data
    }
  }
}
