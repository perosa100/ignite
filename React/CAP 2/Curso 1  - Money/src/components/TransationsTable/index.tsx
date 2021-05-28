import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

function TransationsTable() {
  useEffect(() => {
    async function loadTransactions() {
      await api.get('transactions')
    }
    loadTransactions()
  }, [])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento site</td>
            <td className="deposit">R$ 1200,00</td>
            <td>desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td> Alguel</td>
            <td className="withdraw">- R$ 1200,00</td>
            <td>casa</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default TransationsTable
