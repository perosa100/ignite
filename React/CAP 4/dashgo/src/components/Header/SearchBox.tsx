import { Input } from '@chakra-ui/input'
import { Flex, Icon } from '@chakra-ui/react'
import { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'

export default function SearchBox() {
  const [searchBox, setSearchBox] = useState('')

  return (
    <Flex
      as="label"
      flex="1"
      py={['1', '4']}
      px={['4', '8']}
      ml={['2', '6']}
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.600"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{
          color: 'gray.50'
        }}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  )
}
