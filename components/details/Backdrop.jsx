import Image from "next/image";

export default function Backdrop({ backdropPath }) {
  return (
    <div className="relative h-screen z-50">
      <div className="absolute inset-0">
        <Image
          src={`${process.env.TMDB_IMAGE}${backdropPath}`}
          alt="Backdrop"
          className="w-full h-full object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>
      </div>
    </div>
  );
}
