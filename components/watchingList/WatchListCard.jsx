import { getAllWatchlist } from "@/db/query";
import {
  getPopularAllData,
  getTopRatedAllData,
  getTrendingAllData,
} from "@/Movie-data-fetch";
import { cookies } from "next/headers";
import MovieNotFound from "../MovieNotFound";
import UnAuthrozied from "../UnAuthrozied";
import WatchItem from "./WatchItem";

export default async function WatchListCard() {
  const authId = cookies().get("_us")?.value;
  if (!authId) {
    return (
      <div>
        <UnAuthrozied />
      </div>
    );
  }
  const watch = await getAllWatchlist();
  const userWatchList = watch.find((w) => w.authId === authId);
  const movieData = userWatchList?.movieId;
  console.log(movieData);
  // Render movie details here...

  if (!movieData) {
    return <MovieNotFound />;
  }
  const trending = await getTrendingAllData();
  const topRated = await getTopRatedAllData();
  const popular = await getPopularAllData();

  const allData = [...trending, ...popular, ...topRated];
  const result = allData.filter((item) => movieData?.includes(item.id));
  console.log(result);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {result.map((item) => (
        <div key={item.id}>
          <WatchItem item={item} />
        </div>
      ))}
    </div>
  );
}
