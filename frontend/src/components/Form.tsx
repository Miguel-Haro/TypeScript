import axios from 'axios';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { User } from '../types/User';

interface FormProps {
  onEdit: User | null;
  setOnEdit: (user: User | null) => void;
  getUsers: () => Promise<void>;
}

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

function Form({ onEdit, setOnEdit, getUsers }: FormProps) {
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const form = ref.current;

    if (onEdit) {
      form.nome.value = onEdit.nome;
      form.email.value = onEdit.email;
      form.fone.value = onEdit.fone;
      form.data_nascimento.value = onEdit.data_nascimento ?? '';
    } else {
      form.reset();
    }
  }, [onEdit]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!ref.current) return;

    const formData = new FormData(ref.current);

    const user = {
      nome: String(formData.get('nome') ?? ''),
      email: String(formData.get('email') ?? ''),
      fone: String(formData.get('fone') ?? ''),
      data_nascimento: String(formData.get('data_nascimento') ?? ''),
    };

    try {
      if (onEdit?.id !== undefined) {
        const { data } = await axios.put(
          `http://localhost:8800/${onEdit.id}`,
          user,
        );

        toast.success(
          typeof data === 'string' ? data : 'Usuário atualizado com sucesso!',
        );
      } else {
        const { data } = await axios.post('http://localhost:8800', user);

        toast.success(
          typeof data === 'string' ? data : 'Usuário cadastrado com sucesso!',
        );
      }

      setOnEdit(null);
      ref.current?.reset();
      await getUsers();
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
      toast.error('Não foi possível salvar o usuário.');
    }
  }

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" name="nome" required />
      </InputArea>

      <InputArea>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </InputArea>

      <InputArea>
        <Label htmlFor="fone">Telefone</Label>
        <Input id="fone" name="fone" required />
      </InputArea>

      <InputArea>
        <Label htmlFor="data_nascimento">Data de Nascimento</Label>
        <Input
          id="data_nascimento"
          name="data_nascimento"
          type="date"
          required
        />
      </InputArea>

      <Button type="submit">{onEdit ? 'Atualizar' : 'Salvar'}</Button>
    </FormContainer>
  );
}

export default Form;
