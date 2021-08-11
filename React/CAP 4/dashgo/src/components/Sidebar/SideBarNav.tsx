import { Stack } from '@chakra-ui/layout'
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine
} from 'react-icons/ri'
import NavLink from './NavLink'
import NavSection from './NavSection'

export default function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-Start">
      <NavSection title="Geral">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dasboard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/users">
          Usuarios
        </NavLink>
      </NavSection>

      <NavSection title="Candidatos">
        <NavLink icon={RiInputMethodLine} href="/forms">
          Formularios
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/events">
          Eventos
        </NavLink>
      </NavSection>
    </Stack>
  )
}
