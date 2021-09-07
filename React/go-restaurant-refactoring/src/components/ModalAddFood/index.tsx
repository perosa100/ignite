import * as React from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles, SubmitHandler } from '@unform/core';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

type FormData = {
  name: string;
  image: string;
  description: string;
  price: string;
};

type Food = {
  name: string;
  image: string;
  description: string;
  price: string;
};

type ModalAddFoodProps = {
  isOpen: boolean;
  setIsOpen(): void;
  handleAddFood(food: Food): void;
};

export default function ModalAddFood({
  handleAddFood,
  isOpen,
  setIsOpen,
}: ModalAddFoodProps) {
  const formRef = React.useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = data => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
