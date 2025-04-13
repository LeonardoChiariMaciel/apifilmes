const container = document.getElementById('movies-container');
const searchInput = document.getElementById('search-input');
const typeSelect = document.getElementById('type-select');

async function fetchMovies(type = 'movie') {
  try {
    const res = await fetch(`http://localhost:3000/api/movies/popular?type=${type}`);
    const data = await res.json();
    console.log('Dados recebidos:', data);
    renderMovies(data);
  } catch (err) {
    console.error('Erro ao carregar filmes:', err);
  }
}

function renderMovies(movies) {
  container.innerHTML = '';
  movies.forEach(movie => {
    const div = document.createElement('div');
    div.className = 'movie';
    div.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title || movie.name}" />
      <h3>${movie.title || movie.name}</h3>
    `;
    div.addEventListener('click', () => {
      window.location.href = `details.html?id=${movie.id}&type=${typeSelect.value}`;
    });
    container.appendChild(div);
  });
}


typeSelect.addEventListener('change', () => {
  fetchMovies(typeSelect.value);
});

fetchMovies();
