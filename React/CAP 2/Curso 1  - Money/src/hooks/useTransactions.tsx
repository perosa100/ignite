import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext
} from 'react'
import { api } from '../services/api'

type Transaction = {
  id: number
  title: string
  type: string
  category: string
  amount: number
  createdAt: Date
}

type TransactionType = Omit<Transaction, 'id' | 'createdAt'>

type TransactionContextData = {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionType) => Promise<void>
}

const TransationsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransationsProvider({ children }: TransactionsProviderProps) {
  const [transactions, settransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then((response) => settransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionType) {
    try {
      const response = await api.post('transactions', {
        ...transactionInput,
        createdAt: new Date()
      })

      const { transaction } = response.data

      settransactions([...transactions, transaction])
    } catch (error) {
      alert(`error , ${error}`)
    }
  }

  return (
    <TransationsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransationsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransationsContext)

  return context
}
