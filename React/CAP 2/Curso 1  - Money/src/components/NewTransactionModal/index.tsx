import { Container } from './styles'
import Modal from 'react-modal'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  return (
    <Container>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <h2>Cadastrar Transacao</h2>
      </Modal>
    </Container>
  )
}

export default NewTransactionModal
