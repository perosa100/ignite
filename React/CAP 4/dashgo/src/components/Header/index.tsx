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
          icon={<Icon as={RiMenuLine} />}
          variant="unstyled"
          onClick={onOpen}
          fontSize={24}
          mr={2}
          aria-label="Open navigation"
        />
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
