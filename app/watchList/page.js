import WatchListCard from "@/components/watchingList/WatchListCard";

export default function WatchListPage() {
  return (
    <div className="container mx-auto pt-24 pb-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white">Watch Later</h1>
        <p className="text-light/70 mt-2">
          Movies you&rsquo;ve saved to watch in the future
        </p>
      </header>
      <WatchListCard />
    </div>
  );
}
