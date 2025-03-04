import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import WatchButton from "./WatchButton";

export default function WatchItem({ item }) {
  revalidatePath(`/movie/${item.id}`);
  return (
    <Link href={`/movie/${item.id}`}>
      <div className="bg-moviedb-black rounded-lg overflow-hidden shadow-lg group relative">
        {" "}
        <Image
          src={`${process.env.TMDB_IMAGE}${item.poster_path}`}
          alt="Armor"
          className="w-full h-[450px] object-cover"
          width={300}
          height={300}
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h2 className="text-xl font-bold text-light mb-2">
            {item.original_title}
          </h2>
          <div className="flex justify-between items-center">
            <span className="text-primary">{item.release_date}</span>
            <WatchButton />
          </div>
        </div>
      </div>
    </Link>
  );
}
