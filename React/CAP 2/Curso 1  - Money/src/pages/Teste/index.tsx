import { useEffect, useState } from 'react'
import { Container } from './styles'
import { api } from '../../services/api'

function Teste() {
  const [data, setData] = useState()

  useEffect(() => {
    async function loadFinance() {
      try {
        const response = await api.get('finance?format=json-cors&key=350f5ea8')

        setData(response.data)
      } catch (error) {
        console.log(error, 'error')
      }
    }
    loadFinance()
  }, [])

  return (
    <Container>
      <h1>Teste</h1>
    </Container>
  )
}

export default Teste
