const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // ou outro nome de usuário
  password: 'utfpr', // coloque sua senha do MySQL
  database: 'empresa'
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

// Rota para listar funcionários
app.get('/funcionarios', (req, res) => {
  db.query('SELECT * FROM funcionarios', (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
});

// Rota para adicionar um funcionário
app.post('/funcionarios', (req, res) => {
  const { nome, cargo } = req.body;
  db.query('INSERT INTO funcionarios (nome, cargo) VALUES (?, ?)', [nome, cargo], (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    res.json({ id: result.insertId, nome, cargo });
  });
});

// Inicializa o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
