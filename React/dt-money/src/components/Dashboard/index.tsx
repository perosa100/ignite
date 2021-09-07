import Summary from '../Summary';
import TransactionsTable from '../TransactionsTable';

import * as S from './styles';

export default function Dashboard() {
  return (
    <S.Container>
      <Summary />
      <TransactionsTable />
    </S.Container>
  );
}
