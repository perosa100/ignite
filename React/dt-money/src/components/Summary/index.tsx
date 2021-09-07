import * as React from 'react';

import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import * as S from './styles';

export default function Summary() {
  const { transactions } = useTransactions();

  const summary = React.useMemo(
    () =>
      transactions.reduce(
        (acc, transaction) => {
          if (transaction.type === 'deposit') {
            acc.income += transaction.amount;
            acc.total += transaction.amount;
          } else {
            acc.outcome += transaction.amount;
            acc.total -= transaction.amount;
          }

          return acc;
        },
        {
          income: 0,
          outcome: 0,
          total: 0,
        }
      ),
    [transactions]
  );

  const formattedSummary = React.useMemo(
    () => ({
      income: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(summary.income),
      outcome: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(summary.outcome),
      total: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(summary.total),
    }),
    [summary]
  );

  return (
    <S.Container>
      <S.Summary>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{formattedSummary.income}</strong>
      </S.Summary>
      <S.Summary>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>{formattedSummary.outcome}</strong>
      </S.Summary>
      <S.Summary highlight negative={summary.total < 0}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formattedSummary.total}</strong>
      </S.Summary>
    </S.Container>
  );
}
