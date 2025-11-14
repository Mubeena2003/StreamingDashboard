import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';
import { fetchMovies } from '../lib/tmdb';

export default async function Home() {
  const trending = await fetchMovies('trending/movie/week');
  const topRated = await fetchMovies('movie/top_rated');
  const upcoming = await fetchMovies('movie/upcoming');

  return (
    <main className="flex flex-col gap-12 p-6">
      <HeroBanner movie={trending[0]} />
      <MovieRow title="Trending Now" movies={trending} />
      <MovieRow title="Top Rated" movies={topRated} />
      <MovieRow title="Upcoming" movies={upcoming} />
    </main>
  );
}