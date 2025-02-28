import MovieDetails from "@/components/details/MovieDetails";
import { getTredingById } from "@/Movie-data-fetch";

export async function generateMetadata({ params: { id } }) {
  const movie = await getTredingById(id);

  return {
    title: `MovieDB - ${movie?.title}`,
    description: movie?.overview,
    // openGraph: {
    //   images: [movie?.imageUrl],
    // },
  };
}
export default async function detailsPage({ params: { id } }) {
  const movie = await getTredingById(id);
  return <MovieDetails movie={movie} />;
}
