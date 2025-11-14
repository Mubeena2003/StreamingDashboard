const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

export async function fetchMovies(endpoint: string) {
  const res = await fetch(`${BASE_URL}/${endpoint}?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results || [];
}

export async function fetchMovieDetails(id: string) {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return res.json();
}