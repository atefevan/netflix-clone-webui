import { movies } from "@/public/movies";

export const RandomMovie = () =>
  movies[Math.abs(Math.floor(Math.random() * (0 - 3) + 0))];
