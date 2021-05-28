import { Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'

interface HeaderProps {
  onOpenNewTransactionsModal: () => void
}

const Header = ({ onOpenNewTransactionsModal }: HeaderProps): JSX.Element => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dy Money inicial da  LOGO" />
        <button type="button" onClick={onOpenNewTransactionsModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}

export default Header
