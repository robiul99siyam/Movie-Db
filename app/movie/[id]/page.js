import MovieDetails from "@/components/details/MovieDetails";
import { getTredingById, getVideoByID } from "@/Movie-data-fetch";
import { revalidatePath } from "next/cache";

export async function generateMetadata({ params: { id } }) {
  const movie = await getTredingById(id);
  console.log(movie);
  return {
    title: `MovieDB - ${movie?.title}`,
    description: movie?.overview,
  };
}
export default async function detailsPage({ params: { id } }) {
  const movie = await getTredingById(id);
  const movieUrl = await getVideoByID(id);
  revalidatePath(`/movie/${id}`);
  return <MovieDetails movieUrl={movieUrl} movie={movie} />;
}
