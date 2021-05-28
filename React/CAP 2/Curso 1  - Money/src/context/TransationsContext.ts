import { createContext } from 'react'
import TransationsTable from '../components/TransationsTable/index';

type TransactionDataProps = {
  id: number
  title: string
  type: 'deposit' | 'withdraw'
  category: string
  amount: number
  createdAt: Date
}

export const TransationsContext = createContext([])


export function TransationsTable 