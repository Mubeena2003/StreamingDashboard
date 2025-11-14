import { fetchMovieDetails } from '../../../lib/tmdb';
import Image from 'next/image';

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie = await fetchMovieDetails(params.id);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={450}
        className="rounded-lg mb-4"
      />
      <p>{movie.overview}</p>
    </div>
  );
}