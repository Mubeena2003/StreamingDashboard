import Image from 'next/image';
import Link from 'next/link';

export default function MovieRow({ title, movies }: { title: string; movies: any[] }) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="flex gap-4 overflow-x-scroll pb-4">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`} className="min-w-[150px]">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={150}
              height={225}
              className="rounded-lg hover:scale-105 transition"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}