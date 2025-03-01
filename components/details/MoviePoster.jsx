import Image from "next/image";
import Button from "../share-components/Button";

export default function MoviePoster({ posterPath, title, movieUrl }) {
  return (
    <div className="md:w-1/3">
      <div className="relative">
        <Button movieUrl={movieUrl} />
      </div>
      <Image
        src={`${process.env?.TMDB_IMAGE}${posterPath}`}
        alt={title}
        className="w-full rounded-lg shadow-lg"
        width={1000}
        height={500}
      />
    </div>
  );
}
