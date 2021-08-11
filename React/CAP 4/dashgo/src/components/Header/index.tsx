import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { useSideBarDrawer } from 'contexts/SideBarDrawerContext'
import React from 'react'
import { RiMenuLine } from 'react-icons/ri'
import Logo from './Logo'
import NotificationsNav from './NotificationsNav'
import Profile from './Profile'
import SearchBox from './SearchBox'

export const Header = () => {
  const { onOpen } = useSideBarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h={['10', '20']}
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigate"
          as={RiMenuLine}
          fontSize="24"
          onClick={onOpen}
          mr="2"
          color="green.500"
          variant="unstyled"
          cursor="pointer"
        ></IconButton>
      )}
      <Logo />

      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
