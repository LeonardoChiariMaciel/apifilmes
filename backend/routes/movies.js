const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = process.env.TMDB_API_KEY;

router.get('/popular', async (req, res) => {
  const { type = 'movie' } = req.query;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/${type}/popular`, {
      params: {
        api_key: API_KEY,
        language: 'pt-BR',
        page: 1,
      },
    });
    res.json(response.data.results);
  } catch (error) {
    console.error('Erro ao buscar filmes:', error.message);
    res.status(500).json({ error: 'Erro ao buscar filmes' });
  }
});

router.get('/now_playing', async (req, res) => {
  const { type = 'movie' } = req.query;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/${type}/now_playing`, {
      params: {
        api_key: API_KEY,
        language: 'pt-BR',
        page: 1,
      },
    });
    res.json(response.data.results);
  } catch (error) {
    console.error('Erro ao buscar filmes:', error.message);
    res.status(500).json({ error: 'Erro ao buscar filmes' });
  }
});

router.get('/details', async (req, res) => {
  const { id, type = 'movie' } = req.query;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}`, {
      params: {
        api_key: API_KEY,
        language: 'pt-BR',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar detalhes do filme:', error.message);
    res.status(500).json({ error: 'Erro ao buscar detalhes do filme' });
  }
});


module.exports = router;
