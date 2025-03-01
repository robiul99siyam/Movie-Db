import Image from "next/image";

export default function CastList({ cast }) {
  return (
    <div className="mb-6">
      <h3 className="text-gray-400 mb-2">Cast</h3>
      <div className="flex flex-wrap gap-4">
        {cast?.map((actor) => (
          <div key={actor.id} className="text-center">
            <Image
              src={`${process.env.TMDB_IMAGE}${actor.logo_path}`}
              alt={actor.name}
              className="w-24 h-24 rounded-full object-contain mb-2 border border-gray-500"
              width={96}
              height={96}
              quality={100}
            />
            <p className="text-sm">{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
