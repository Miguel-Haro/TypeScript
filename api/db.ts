import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();

export const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'crud',
});

db.connect((err) => {
  if (err) {
    console.error('Erro no MySQL:', err.message);
    return;
  }

  console.log('MySQL conectado com sucesso!');
});
