import Image from 'next/image';
import Link from 'next/link';

export default function HeroBanner({ movie }: { movie: any }) {
  return (
    <section className="relative w-full h-[70vh] rounded-lg overflow-hidden">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        className="object-cover opacity-70"
      />
      <div className="absolute bottom-0 left-0 p-8">
        <h2 className="text-4xl font-bold mb-4">{movie.title}</h2>
        <p className="max-w-2xl mb-4">{movie.overview}</p>
        <Link href={`/movie/${movie.id}`} className="bg-gold text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
          Watch Now
        </Link>
      </div>
    </section>
  );
}