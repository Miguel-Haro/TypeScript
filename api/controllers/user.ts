import { Request, Response } from 'express';
import { db } from '../db';

export const getUsers = (_: Request, res: Response): void => {
  const q = 'SELECT * FROM usuarios';

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    res.status(200).json(data);
  });
};

export const addUser = (req: Request, res: Response) => {
  const q =
    'INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)';

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json('Usuario criado com sucesso');
  });
};

export const updateUser = (req: Request, res: Response) => {
  const q =
    'UPDATE usuarios SET `nome` =?, `email` =?, `fone` =?, `data_nascimento` =? WHERE `id` =?';

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json('Usuario atualizado com sucesso');
  });
};

export const deleteUser = (req: Request, res: Response) => {
  const q = 'DELETE FROM usuarios WHERE `id` = ?';

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json('Usuario deletado com sucersso');
  });
};
