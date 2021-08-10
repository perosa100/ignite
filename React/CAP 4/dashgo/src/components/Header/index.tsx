import {
  Flex,
  Image,
  Text,
  Input,
  Icon,
  HStack,
  Box,
  Avatar
} from '@chakra-ui/react'
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'
{
  /*     <Image src="img/logo.jpg" width="20" height="20" /> */
}
export const Header = () => (
  <Flex
    as="header"
    w="100%"
    maxW={1480}
    h="20"
    mx="auto"
    mt="4"
    px="6"
    align="center"
  >
    <Text
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
      color="green.500"
    >
      UFGD
    </Text>
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
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

    <Flex align="center" ml="auto">
      <HStack
        spacing="4"
        mx="8"
        pr="8"
        py="1"
        color="gray.500"
        borderRightWidth={1}
        borderColor="gray.900"
      >
        <Icon as={RiNotificationLine} fontSize="20" />
        <Icon as={RiUserAddLine} fontSize="20" />
      </HStack>

      <Flex align="center">
        <Box marginRight="4" textAlign="right">
          <Text color="pink.900">Patrick Perosa</Text>
          <Text color="gray.500" fontSize="small">
            patrickperosapp@gmail.com
          </Text>
        </Box>

        <Avatar
          size="md"
          name="Patrick Perosa"
          src="https:github.com/perosa100.png"
        />
      </Flex>
    </Flex>
  </Flex>
)
