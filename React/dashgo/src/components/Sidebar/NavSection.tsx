import { Box, Stack, Text } from '@chakra-ui/react';

type NavSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text
        fontWeight="bold"
        fontSize="small"
        textTransform="uppercase"
        color="gray.400"
      >
        {title}
      </Text>
      <Stack spacing={4} mt={8} align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
