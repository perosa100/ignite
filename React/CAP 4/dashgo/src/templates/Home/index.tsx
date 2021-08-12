import { Flex, Box, Text } from '@chakra-ui/react'
import Logo from 'components/Header/Logo'

export default function SignIn() {
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
      >
        <Text>Home</Text>
      </Flex>
    </Flex>
  )
}
