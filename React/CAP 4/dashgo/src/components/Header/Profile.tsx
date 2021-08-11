import { Flex, Box, Avatar, Text } from '@chakra-ui/react'
import React from 'react'

interface ProfileProps {
  showProfileData?: boolean
}
export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text color="pink.900">Patrick Perosa</Text>
          <Text color="gray.500" fontSize="small">
            patrickperosapp@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Patrick Perosa"
        src="https:github.com/perosa100.png"
        cursor="pointer"
      />
    </Flex>
  )
}
