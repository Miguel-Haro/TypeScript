import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { User } from '../types/User';

interface CellProps {
  onlyWeb?: boolean;
  alignCenter?: boolean;
  width?: string;
}

interface GridProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  setOnEdit: (user: User | null) => void;
}

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 800px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const Tbody = styled.tbody``;

export const Th = styled.th<CellProps>`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${({ onlyWeb }) => onlyWeb && 'display: none;'}
  }
`;

export const Td = styled.td<CellProps>`
  padding-top: 15px;
  text-align: ${({ alignCenter }) => (alignCenter ? 'center' : 'start')};
  width: ${({ width }) => width || 'auto'};

  @media (max-width: 500px) {
    ${({ onlyWeb }) => onlyWeb && 'display: none;'}
  }
`;

const Grid = ({ users, setUsers, setOnEdit }: GridProps) => {
  const handleDelete = async (id: number | undefined) => {
    if (id === undefined) {
      toast.error('ID do usuário não encontrado.');
      return;
    }

    try {
      const { data } = await axios.delete(`http://localhost:8800/${id}`);

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

      toast.success(
        typeof data === 'string' ? data : 'Usuário excluído com sucesso!',
      );

      setOnEdit(null);
    } catch (error) {
      toast.error('Não foi possível excluir o usuário.');
      console.error('Erro ao excluir usuário:', error);
    }
  };

  const handleEdit = (user: User) => {
    setOnEdit(user);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyWeb>Fone</Th>
          <Th aria-label="Editar"></Th>
          <Th aria-label="Excluir"></Th>
        </Tr>
      </Thead>

      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.email}</Td>
            <Td width="20%" onlyWeb>
              {item.fone}
            </Td>

            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>

            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
