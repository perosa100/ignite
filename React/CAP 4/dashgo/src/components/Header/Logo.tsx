import { Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/dashboard" passHref>
      <Text
        as="a"
        fontSize={['2xl', '3xl', '4xl']}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
        color="green.500"
      >
        UFGD
      </Text>
    </Link>
  )
}
