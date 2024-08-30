import React from "react";
import MovieCard from "./MovieCard";
import TopTenMovieCard from "./TopTenMovieCard";
interface MovieListProps {
  data: any;
  title: string;
  isTopTen?: boolean;
}
const MovieList = ({ data, title, isTopTen = false }: MovieListProps) => {
  return (
    <div className="px-4 md:px-12 space-y-2">
      <p className="text-white text-md md:text-xl  mt-9 lg:text-2xl font-semibold">
        {title}
      </p>
      {!isTopTen ? (
        <div className="grid grid-cols-5 gap-2">
          {data.map((movie: any, idx: number) => (
            <MovieCard key={idx} data={movie} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-2">
          {data.map((movie: any, idx: number) => (
            <TopTenMovieCard key={idx} data={movie} serial={idx + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
