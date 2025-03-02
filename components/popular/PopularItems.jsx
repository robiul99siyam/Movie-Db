import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default function PopularItems({ movie }) {
  const cookieStore = cookies();
  const token = cookieStore.get("_us");
  return (
    <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
      <Link href={token?.value ? `/movie/${movie.id}` : "/login"}>
        <Image
          src={`${process.env.TMDB_IMAGE}${movie.poster_path}`}
          alt="Smile 2"
          className="w-full rounded-lg"
          width={200}
          height={300}
        />
        <div className="mt-2">
          <h3 className="text-light text-sm font-bold truncate">
            {movie?.original_title}
          </h3>
          <p className="text-primary text-xs">{movie?.release_date}</p>
        </div>
      </Link>
    </div>
  );
}
