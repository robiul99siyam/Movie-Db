export default function MovieNotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4 mt-5">
      <h1 className="text-red-500 text-4xl font-semibold">Movie-DB</h1>
      <p className="text-gray-300 mt-2 mb-4 text-5xl font-bold">
        No movies in watchlist
      </p>
    </div>
  );
}
