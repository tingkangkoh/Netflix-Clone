import React from "react";
import { useEffect, useState } from "react";
import Hero from "./Hero.js";
import Main from "./Main.js";
import movieService from "./services/movies";

import "./App.css";

function App() {
  const [trending, setTrending] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [topTv, setTopTv] = useState([]);
  const [heroSelect, setHeroSelect] = useState("");

  function addGenreNames(movies, type, genres, genresTv) {
    let moviesResults = movies.results.map((movie) => {
      let movieNew = { ...movie };
      let genreNames = movieNew.genre_ids.map((id) => {
        let genreFound;
        if (type === "both") {
          if (movie.media_type === "movie") {
            console.log("genres", genres);
            genreFound = genres.find((genre) => genre.id === id);
          } else {
            genreFound = genresTv.find((genre) => genre.id === id);
          }
        } else if (type === "movies") {
          genreFound = genres.find((genre) => genre.id === id);
        } else {
          genreFound = genresTv.find((genre) => genre.id === id);
        }

        return genreFound.name;
      });
      movieNew.genreNames = genreNames;
      return movieNew;
    });
    return moviesResults;
  }

  useEffect(() => {
    setup();
  }, []);

  async function setup() {
    let genres = await movieService.getGenresMovies();
    let genresTv = await movieService.getGenresTv();

    let moviesTrending = await movieService.getTrending();
    console.log("genresMovies", genres.genres);
    console.log("genresTv", genresTv.genres);
    let updatedMovies = addGenreNames(
      moviesTrending,
      "both",
      genres.genres,
      genresTv.genres
    );
    setTrending(updatedMovies);
    setHeroSelect(updatedMovies[0]);

    let moviesTop = await movieService.getTopMovies();
    let updateMovies = addGenreNames(
      moviesTop,
      "movies",
      genres.genres,
      genresTv.genres
    );
    setTopMovies(updateMovies);

    let tvTop = await movieService.getTopTv();
    let updatedTv = addGenreNames(tvTop, "tv", genres.genres, genresTv.genres);
    setTopTv(updatedTv);
  }

  let trending_titles = trending.map((media) =>
    media.name ? media.name : media.title
  );

  return (
    <div className="App">
      <Hero heroSelect={heroSelect} />
      <Main
        trending={trending}
        topMovies={topMovies}
        topTv={topTv}
        setHeroSelect={setHeroSelect}
      />
    </div>
  );
}

export default App;
