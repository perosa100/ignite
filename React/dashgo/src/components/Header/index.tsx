import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';

import { useSidebarDrawer } from 'contexts/SidebarDrawerContext';

import Profile from './Profile';
import NotificationsNav from './NotificationsNav';
import SearchBox from './SearchBox';
import Logo from './Logo';

export default function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h={20}
      mx="auto"
      mt={4}
      px={6}
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Abre navegação"
          icon={<Icon as={RiMenuLine} />}
          fontSize={24}
          mr={2}
          variant="unstyled"
          onClick={onOpen}
        />
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
