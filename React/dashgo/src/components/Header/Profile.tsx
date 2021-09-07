import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

type ProfileProps = {
  showProfileData?: boolean;
};

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>João Vítor</Text>
          <Text color="gray.300" fontSize="small">
            joao@vitor.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="João Vítor"
        src="https://github.com/JoaoVSouto.png"
      />
    </Flex>
  );
}
