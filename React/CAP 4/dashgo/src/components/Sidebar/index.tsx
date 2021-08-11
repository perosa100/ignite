import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue
} from '@chakra-ui/react'
import { useSideBarDrawer } from 'contexts/SideBarDrawerContext'

import React from 'react'
import SideBarNav from './SideBarNav'

export const Sidebar = () => {
  const { onClose, isOpen } = useSideBarDrawer()

  const isFloatBarFloat = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isFloatBarFloat) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" padding="2">
            <DrawerCloseButton />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" width="36" mr="8">
      <SideBarNav />
    </Box>
  )
}
