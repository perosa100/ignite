import * as React from 'react';
import Modal from 'react-modal';

import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import * as S from './styles';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

type TypeStates = 'deposit' | 'withdraw';

export default function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [type, setType] = React.useState<TypeStates>('deposit');

  const [title, setTitle] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleCreateNewTransaction = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    await createTransaction({
      amount: Number(price),
      category,
      title,
      type,
    });

    setType('deposit');
    setTitle('');
    setPrice('');
    setCategory('');
    onRequestClose();
  };

  const handleTypeChange = (newType: TypeStates) => () => {
    setType(newType);
  };

  function handleFormFieldChange<T>(
    dispatch: React.Dispatch<React.SetStateAction<T>>
  ) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch((e.target.value as unknown) as T);
    };
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      appElement={document.getElementById('root') || undefined}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={handleFormFieldChange(setTitle)}
        />

        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={handleFormFieldChange(setPrice)}
        />

        <S.TransactionTypeContainer>
          <S.RadioBox
            onClick={handleTypeChange('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>
          <S.RadioBox
            onClick={handleTypeChange('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={handleFormFieldChange(setCategory)}
        />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
