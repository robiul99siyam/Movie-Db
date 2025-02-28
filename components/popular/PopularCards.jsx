import { getPopularAllData } from "@/Movie-data-fetch";
import PopularItems from "./PopularItems";

export default async function PopularCards() {
  const popular = await getPopularAllData();
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Popular on MOVIE DB</h2>
        <div
          id="trendingMovies"
          className="flex space-x-4 overflow-x-auto pb-4"
        >
          {popular?.map((movie) => (
            <PopularItems movie={movie} key={movie.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
