import { getTopRatedAllData } from "@/Movie-data-fetch";
import { revalidatePath } from "next/cache";
import TopRatedItems from "./TopRatedItems";

export default async function TopRatedCard() {
  const tepRatedMovie = await getTopRatedAllData();

  revalidatePath("/");
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Top Rated</h2>
        <div
          id="trendingMovies"
          className="flex space-x-4 overflow-x-auto pb-4"
        >
          {tepRatedMovie?.map((movie) => (
            <TopRatedItems movie={movie} key={movie.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
