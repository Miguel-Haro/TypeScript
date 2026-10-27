import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { User } from './types/User';

import Form from './components/Form';
import Grid from './components/Grid';
import GlobalStyle from './styles/global';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [onEdit, setOnEdit] = useState<User | null>(null);

  const getUsers = async () => {
    try {
      const res = await axios.get<User[]>('http://localhost:8800');

      setUsers(res.data.sort((a, b) => a.nome.localeCompare(b.nome)));
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
      toast.error('Não foi possível carregar os usuários.');
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <GlobalStyle />

      <Container>
        <Title>Usuários</Title>

        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />

        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
      </Container>

      <ToastContainer autoClose={3000} position="bottom-left" />
    </>
  );
}

export default App;
