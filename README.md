# CRUD Full Stack — React, TypeScript e MySQL

Aplicação Full Stack para gerenciamento de usuários, desenvolvida com **React, TypeScript, Node.js, Express e MySQL**. O projeto permite cadastrar, visualizar, editar e excluir usuários por meio de uma interface integrada a uma API REST.

## Tecnologias utilizadas

### Frontend
- React
- TypeScript
- Axios
- Styled Components
- React Toastify

### Backend
- Node.js
- Express
- TypeScript
- MySQL
- dotenv

## Funcionalidades

- [x] Listagem de usuários
- [x] Cadastro de usuários
- [x] Edição de usuários
- [x] Exclusão de usuários
- [x] Integração com banco de dados MySQL
- [x] Notificações de sucesso e erro
- [x] Interface desenvolvida com React e TypeScript

## Estrutura do projeto

```text
crud/
├── api/
│   ├── controllers/
│   │   └── user.ts
│   ├── routes/
│   │   └── users.ts
│   ├── db.ts
│   ├── index.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Form.tsx
│   │   │   └── Grid.tsx
│   │   ├── styles/
│   │   │   └── global.ts
│   │   ├── types/
│   │   │   └── User.ts
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/)
- [MySQL](https://dev.mysql.com/downloads/)
- [Git](https://git-scm.com/)
- Yarn ou npm

## Instalação e configuração

### 1. Clone o repositório

```bash
git clone https://github.com/Miguel-Haro/TypeScript.git
cd TypeScript
```

### 2. Configure o banco de dados

Crie o banco de dados MySQL:

```sql
CREATE DATABASE crud;
```

A tabela `usuarios` deve conter os campos utilizados pela aplicação:

- `id`
- `nome`
- `email`
- `fone`
- `data_nascimento`

Confira os nomes e tipos das colunas conforme as consultas implementadas no backend.

### 3. Configure as variáveis de ambiente

Dentro da pasta `api`, crie um arquivo `.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=crud
```

Altere os valores conforme a configuração do seu MySQL. Não compartilhe credenciais reais nem envie o arquivo `.env` para o GitHub.

### 4. Execute o backend

Abra um terminal na raiz do projeto:

```bash
cd api
yarn install
```

Inicie a API usando o script configurado no `package.json`. Se o script de desenvolvimento estiver configurado como `dev`, execute:

```bash
yarn dev
```

A API utiliza a porta `8800`, conforme a configuração do projeto.

### 5. Execute o frontend

Abra outro terminal na raiz do projeto:

```bash
cd frontend
npm install
npm start
```

O frontend será iniciado pelo Create React App, normalmente em:

```text
http://localhost:3000
```

Mantenha o backend e o frontend executando simultaneamente.

## Modelo de usuário

A aplicação trabalha com os seguintes dados:

| Campo | Descrição |
|---|---|
| `id` | Identificador do usuário |
| `nome` | Nome completo |
| `email` | Endereço de e-mail |
| `fone` | Telefone |
| `data_nascimento` | Data de nascimento |

## Objetivo do projeto

Este projeto foi desenvolvido para praticar conceitos de desenvolvimento Full Stack, incluindo criação de interfaces com React, tipagem com TypeScript, construção de APIs REST, integração com banco de dados relacional e operações CRUD.
