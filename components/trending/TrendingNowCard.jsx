import { getTrendingAllData } from "@/Movie-data-fetch";
import { Suspense } from "react";
import TrendingNowItem from "./TrendingNowItem";

export default async function TrendingNowCard() {
  const tredingMovie = await getTrendingAllData();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
        <div
          id="trendingMovies"
          className="flex space-x-4 overflow-x-auto pb-4"
        >
          <Suspense fallback={<h1>Loading...</h1>}>
            {tredingMovie?.map((movie) => (
              <TrendingNowItem movie={movie} key={movie.id} />
            ))}
          </Suspense>
        </div>
      </section>
    </div>
  );
}
