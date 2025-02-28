import TrendingNowItem from "./TrendingNowItem";

export default function TrendingNowCard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
        <div id="trendingMovies" class="flex space-x-4 overflow-x-auto pb-4">
          <TrendingNowItem />
        </div>
      </section>
    </div>
  );
}
