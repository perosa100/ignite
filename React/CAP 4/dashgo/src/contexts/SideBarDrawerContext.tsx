import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks'
import { useRouter } from 'next/router'
import { createContext, useContext, useEffect } from 'react'

interface SideBarDrawerContextProps {
  children: React.ReactNode
}

type SideBarDrawerContextData = UseDisclosureReturn

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData)

export function SideBarDrawerProvider({ children }: SideBarDrawerContextProps) {
  const disclouser = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclouser.onClose()
  }, [router.asPath])

  return (
    <SideBarDrawerContext.Provider value={disclouser}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}

export const useSideBarDrawer = () => useContext(SideBarDrawerContext)
