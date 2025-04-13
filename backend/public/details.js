window.onload = async function () {
    const container = document.getElementById('details-container');
  
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const type = params.get('type');
  
    if (!id || !type) {
      container.innerHTML = '<p>Filme não encontrado.</p>';
      return;
    }
  
    try {
      const res = await fetch(`http://localhost:3000/api/movies/details?id=${id}&type=${type}`);
      const movie = await res.json();
  
      container.innerHTML = `
        <div class="movie-details">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title || movie.name}" />
          <div>
            <h1>${movie.title || movie.name}</h1>
            <p><strong>Data de Lançamento:</strong> ${movie.release_date || movie.first_air_date || 'N/A'}</p>
            <p><strong>Sinopse:</strong> ${movie.overview}</p>
            <p><strong>Nota:</strong> ${movie.vote_average}</p>
          </div>
        </div>
      `;
    } catch (err) {
      container.innerHTML = '<p>Erro ao carregar detalhes.</p>';
      console.error(err);
    }
  };
  