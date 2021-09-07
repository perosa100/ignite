import * as React from 'react';

import api from '../services/api';

type Transaction = {
  id: string;
  title: string;
  amount: number;
  parsedAmount: string;
  type: 'deposit' | 'withdraw';
  category: string;
  createdAt: string;
  parsedCreatedAt: string;
};

type RawTransaction = Omit<Transaction, 'parsedAmount' | 'parsedCreatedAt'>;

type TransactionInput = Omit<RawTransaction, 'id' | 'createdAt'>;

type TransactionsAPIResponse = {
  transactions: RawTransaction[];
};

type TransactionsProviderProps = {
  children: React.ReactNode;
};

type TransactionsContextData = {
  transactions: Transaction[];
  createTransaction(transaction: TransactionInput): Promise<void>;
};

const parseTransaction = (transaction: RawTransaction) => ({
  ...transaction,
  parsedAmount: new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(transaction.amount),
  parsedCreatedAt: new Intl.DateTimeFormat('pt-BR').format(
    new Date(transaction.createdAt)
  ),
});

const TransactionsContext = React.createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  React.useEffect(() => {
    api.get<TransactionsAPIResponse>('transactions').then(response => {
      const incomingTransactions = response.data.transactions;

      const parsedTransactions = incomingTransactions.map(parseTransaction);

      setTransactions(parsedTransactions);
    });
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    const response = await api.post('transactions', transaction);

    const incomingTransaction = response.data.transaction;

    const parsedTransaction = parseTransaction(incomingTransaction);

    setTransactions(state => [...state, parsedTransaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = React.useContext(TransactionsContext);

  if (!context) {
    throw new Error(
      'useTransactions must be used within a TransactionProvider'
    );
  }

  return context;
}
