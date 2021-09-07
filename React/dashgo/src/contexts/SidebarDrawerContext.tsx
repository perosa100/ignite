import * as React from 'react';
import { useRouter } from 'next/router';
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';

type SidebarDrawerProviderProps = {
  children: React.ReactNode;
};

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = React.createContext<SidebarDrawerContextData>(
  {} as SidebarDrawerContextData
);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  React.useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export function useSidebarDrawer() {
  const context = React.useContext(SidebarDrawerContext);

  if (!context) {
    throw new Error(
      'useSidebarDrawer must be used within a SidebarDrawerProvider'
    );
  }

  return context;
}
