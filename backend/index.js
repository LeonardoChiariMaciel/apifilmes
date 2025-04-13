require('dotenv').config();
const express = require('express');
const cors = require('cors');
const moviesRouter = require('./routes/movies');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/movies', moviesRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
