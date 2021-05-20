import { Router } from 'express'
import { v4 as uuid } from 'uuid'

type CustomersProps = {
  cpf: string
  name: string
  id: string
  statement: [
    description: string,
    amount: number,
    created_at: Date,
    type: 'credit' | 'debit'
  ][]
}
const customers: CustomersProps[] = []

function verifyIfExistsAccountCPF(request, response, next) {
  const { cpf } = request.headers

  const customer = customers.find((customer) => (customer.cpf = cpf))

  if (!customer) {
    return response.status(400).json({ error: 'Conta Inexistente' })
  }
  request.customer = customer

  return next()
}

function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if (operation.type === 'credit') {
      return acc + operation.amount
    } else {
      return acc - operation.amount
    }
  }, 0)

  return balance
}

const router = Router()
router.post('/account', (request, response) => {
  const { cpf, name } = request.body

  const customAlreadyExists = customers.some((customer) => (customer.cpf = cpf))

  if (customAlreadyExists) {
    return response.status(400).json({ error: 'Usuario ja Existe' })
  }

  customers.push({
    cpf,
    name,
    id: uuid(),
    statement: []
  })
  return response.status(201).send()
})

router.get('/statement', verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request
  return response.json(customer.statement)
})

router.post('/deposit', verifyIfExistsAccountCPF, (request, response) => {
  const { description, amount } = request.body
  const { customer } = request

  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: 'credit'
  }

  customer.statement.push(statementOperation)

  return response.json(statementOperation)
})

router.post('/withdraw', verifyIfExistsAccountCPF, (request, response) => {
  const { amount } = request.body
  const { customer } = request

  const balance = getBalance(customer.statement)

  if (balance < amount) {
    return response.status(400).json({ error: 'Saldo insuficiente' })
  }

  const statementOperation = {
    amount,
    created_at: new Date(),
    type: 'debit'
  }

  customer.statement.push(statementOperation)

  return response.json(statementOperation)
})

router.get('/statement/date', verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request
  const { date } = request.query

  const dateFormat = new Date(date + ' 00:00')

  const statement = customer.statement.filter(
    (statement) =>
      statement.created_at.toDateString() ===
      new Date(dateFormat).toDateString()
  )

  return response.json(statement)
})

router.put('/account', verifyIfExistsAccountCPF, (request, response) => {
  const { name } = request.body
  const { customer } = request

  customer.name = name

  return response.status(201).send()
})

router.put('/account', verifyIfExistsAccountCPF, (request, response) => {
  const { name } = request.body
  const { customer } = request

  customer.name = name

  return response.status(201).send()
})

router.get('/account', verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request

  return response.json(customer)
})

router.delete('/account', verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request

  //splice
  customers.splice(customer, 1)

  return response.status(204).json(customers)
})

router.get('/balance', verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request

  const balance = getBalance(customer.statement)

  return response.json(balance)
})

export { router }
