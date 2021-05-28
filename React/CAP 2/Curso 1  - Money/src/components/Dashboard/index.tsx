import Summary from '../Summary'
import TransationsTable from '../TransationsTable'
import { Container } from './styles'

function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransationsTable />
    </Container>
  )
}

export default Dashboard
