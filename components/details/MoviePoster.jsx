import Image from "next/image";

export default function MoviePoster({ posterPath, title }) {
  return (
    <div className="md:w-1/3">
      <Image
        src={`${process.env.TMDB_IMAGE}${posterPath}`}
        alt={title}
        className="w-full rounded-lg shadow-lg"
        width={1000}
        height={500}
      />
    </div>
  );
}
