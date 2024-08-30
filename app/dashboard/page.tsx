import React from "react";
import Navbar from "../component/Navbar";
import Billboard from "../component/Billboard";
import MovieList from "../component/MovieList";
import {
  animation,
  inspiring_movies,
  matched_to_you,
  new_on_netflix,
  top_ten_movies,
  watch_in_one_week,
  we_think_you_will_love_this,
} from "@/public/movies";
import Footer from "../footer/page";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Matched To You" data={matched_to_you} />
        <MovieList title="New on Netflix" data={new_on_netflix} />
        <MovieList
          title="We think you'll Love This"
          data={we_think_you_will_love_this}
        />
        <div className="hidden lg:block"><MovieList title="Top 10 movies in the BD. Today" data={top_ten_movies} isTopTen /></div>
        <MovieList title="Animation" data={animation} />
        <MovieList title="Inspiring Movies" data={inspiring_movies} />
        <MovieList title="Watch in one weekend" data={watch_in_one_week} />
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
