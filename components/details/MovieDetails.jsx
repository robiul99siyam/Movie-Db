import ActionButtons from "./ActionButtons";
import Backdrop from "./Backdrop";
import CastList from "./CastList";
import MovieInfo from "./MovieInfo";
import MoviePoster from "./MoviePoster";
import SocialShare from "./SocialShare";

export default function MovieDetails({ movie, movieUrl }) {
  return (
    <div id="movieDetails" className="min-h-screen pt-20 mb-8">
      <Backdrop backdropPath={movie.backdrop_path} />
      <div className="relative container mx-auto px-4 mt-[-550px] z-50 ">
        <div className="flex flex-col md:flex-row gap-8">
          <MoviePoster
            movieUrl={movieUrl}
            homePage={movie.homepage}
            posterPath={movie.poster_path}
            title={movie.title}
          />
          <div className="md:w-2/3">
            <MovieInfo movie={movie} />
            <CastList cast={movie.production_companies} />
            <ActionButtons />
            <SocialShare />
          </div>
        </div>
        <div
          id="trendingMovies"
          className="flex space-x-4 overflow-x-auto pb-4"
        ></div>
      </div>
    </div>
  );
}
