import * as React from 'react';

import { useTransactions } from '../../hooks/useTransactions';

import * as S from './styles';

export default function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td className="title">{transaction.title}</td>
              <td className={transaction.type}>{transaction.parsedAmount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.parsedCreatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  );
}
