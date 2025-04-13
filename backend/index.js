require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Mock de dados para testar
const movies = [
  { title: 'Movie 1', poster_path: '/path1.jpg' },
  { title: 'Movie 2', poster_path: '/path2.jpg' },
];

app.use(cors());
app.use(express.json());

// Rota para retornar filmes populares
app.get('/api/movies/popular', (req, res) => {
  const { type } = req.query; // 'type' vem da query string
  res.json(movies); // Aqui estamos retornando os filmes mockados
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
