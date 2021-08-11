import React from 'react'
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
import { Sidebar } from 'components/Sidebar'
import { Header } from 'components/Header'
import { RiAddLine, RiEditLine } from 'react-icons/ri'
import Pagination from 'components/Pagination'
import Link from 'next/link'

export default function UserList() {
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
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold"> patrick Perosa </Text>
                    <Text fontSize="sm" color="gray.300">
                      patrickpoerospp@gmaio.c.om
                    </Text>
                  </Box>
                </Td>

                <Td>
                  <Box>
                    {isWideVersion && <Text> 14 de abril de 2021 </Text>}
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
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold"> patrick Perosa </Text>
                    <Text fontSize="sm" color="gray.300">
                      patrickpoerospp@gmaio.c.om
                    </Text>
                  </Box>
                </Td>

                <Td>
                  <Box>
                    {isWideVersion && <Text> 14 de abril de 2021 </Text>}
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

              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold"> patrick Perosa </Text>
                    <Text fontSize="sm" color="gray.300">
                      patrickpoerospp@gmaio.c.om
                    </Text>
                  </Box>
                </Td>

                <Td>
                  <Box>
                    {isWideVersion && <Text> 14 de abril de 2021 </Text>}
                  </Box>
                </Td>

                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    cursor="pointer"
                    colorScheme="orange"
                    leftIcon={<Icon as={RiEditLine} />}
                  >
                    {isWideVersion && 'Editar'}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
