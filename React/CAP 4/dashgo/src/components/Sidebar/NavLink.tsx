import { Link as CharkaLink, Icon, Text, LinkProps } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import ActiveLink from './ActiveLink'

interface NavLinkProps extends LinkProps {
  icon: React.ElementType
  children: React.ReactNode
  href: string
}

export default function NavLink({
  icon,
  children,
  href,
  ...rest
}: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <CharkaLink
        display="flex"
        alignItems="center"
        color="purple.400"
        {...rest}
      >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </CharkaLink>
    </ActiveLink>
  )
}
