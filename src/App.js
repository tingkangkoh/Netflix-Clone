import React from "react";
import { useEffect, useState } from "react";
import Hero from "./Hero.js";
import Main from "./Main.js";
import movieService from "./services/movies";
import Modal from "./Modal.js";
import Header from "./Header.js";
import Movies from "./Movies.js";
import Search from "./Search.js";
import Tv from "./Tv.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useSearchParams,
} from "react-router-dom";
import "./App.css";

function App() {
  const [trending, setTrending] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [thrillerMovies, setThrillerMovies] = useState([]);
  const [actionTv, setActionTv] = useState([]);
  const [animationTv, setAnimationTv] = useState([]);
  const [comedyTv, setComedyTv] = useState([]);
  const [dramaTv, setDramaTv] = useState([]);
  const [sciTv, setSciTv] = useState([]);
  const [topTv, setTopTv] = useState([]);
  const [heroSelect, setHeroSelect] = useState("");
  const [modalOn, setModalOn] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  function addGenreNames(movies, type, genres, genresTv) {
    let moviesResults = movies.results.map((movie) => {
      let movieNew = { ...movie };
      if (movieNew.genre_ids) {
        let genreNames = movieNew.genre_ids.map((id) => {
          let genreFound;
          if (type === "both") {
            if (movie.media_type === "movie") {
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
      }

      return movieNew;
    });
    return moviesResults;
  }
  // function addVideoKeys(list,type) {
  //   if(type==="movies"){

  //   }
  // }

  useEffect(() => {
    setup();
  }, []);

  useEffect(() => {
    async function searchFunction() {
      let genres = await movieService.getGenresMovies();
      let genresTv = await movieService.getGenresTv();
      let media = await movieService.search(search);
      let updatedMedia = addGenreNames(
        media,
        "both",
        genres.genres,
        genresTv.genres
      );
      let filteredMedia = updatedMedia.filter(
        (media) => media.media_type === "tv" || media.media_type === "movie"
      );
      filteredMedia = filterBackdropPath(filteredMedia);
      setSearchResult(filteredMedia);
    }
    searchFunction();
  }, [search]);

  function filterBackdropPath(media) {
    return media.filter((item) => item.backdrop_path !== null);
  }

  async function setup() {
    let genres = await movieService.getGenresMovies();
    let genresTv = await movieService.getGenresTv();

    let moviesTrending = await movieService.getTrending();
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
    updateMovies = filterBackdropPath(updateMovies);
    setTopMovies(updateMovies);

    let tvTop = await movieService.getTopTv();
    let updatedTv = addGenreNames(tvTop, "tv", genres.genres, genresTv.genres);
    updatedTv = filterBackdropPath(updatedTv);
    setTopTv(updatedTv);

    let actionMovies = await movieService.getMoviesGenre(28);
    let updatedActionMovies = addGenreNames(
      actionMovies,
      "movies",
      genres.genres,
      genresTv.genres
    );
    updatedActionMovies = filterBackdropPath(updatedActionMovies);
    setActionMovies(updatedActionMovies);

    let advenMovies = await movieService.getMoviesGenre(12);
    let updatedAdvenMovies = addGenreNames(
      advenMovies,
      "movies",
      genres.genres,
      genresTv.genres
    );
    updatedAdvenMovies = filterBackdropPath(updatedAdvenMovies);
    setAdventureMovies(updatedAdvenMovies);

    let comedyMovies = await movieService.getMoviesGenre(35);
    let updatedComedyMovies = addGenreNames(
      comedyMovies,
      "movies",
      genres.genres,
      genresTv.genres
    );
    updatedComedyMovies = filterBackdropPath(updatedComedyMovies);
    setComedyMovies(updatedComedyMovies);

    let horrorMovies = await movieService.getMoviesGenre(27);
    let updatedHorrorMovies = addGenreNames(
      horrorMovies,
      "movies",
      genres.genres,
      genresTv.genres
    );
    updatedComedyMovies = filterBackdropPath(updatedComedyMovies);
    setHorrorMovies(updatedHorrorMovies);

    let thrillerMovies = await movieService.getMoviesGenre(53);
    let updatedThrillerMovies = addGenreNames(
      thrillerMovies,
      "movies",
      genres.genres,
      genresTv.genres
    );
    updatedThrillerMovies = filterBackdropPath(updatedThrillerMovies);
    setThrillerMovies(updatedThrillerMovies);

    let actionTv = await movieService.getTvGenre(10759);
    let updatedActionTv = addGenreNames(
      actionTv,
      "tv",
      genres.genres,
      genresTv.genres
    );
    updatedActionTv = filterBackdropPath(updatedActionTv);
    setActionTv(updatedActionTv);

    //animation
    let animationTv = await movieService.getTvGenre(16);
    let updatedAnimationTv = addGenreNames(
      animationTv,
      "tv",
      genres.genres,
      genresTv.genres
    );
    updatedAnimationTv = filterBackdropPath(updatedAnimationTv);
    setAnimationTv(updatedAnimationTv);
    //comedy

    let comedyTv = await movieService.getTvGenre(35);
    let updatedComedyTv = addGenreNames(
      comedyTv,
      "tv",
      genres.genres,
      genresTv.genres
    );
    updatedComedyTv = filterBackdropPath(updatedComedyTv);
    setComedyTv(updatedComedyTv);
    //sci-fi
    let scifiTv = await movieService.getTvGenre(10765);
    let updatedScifiTv = addGenreNames(
      scifiTv,
      "tv",
      genres.genres,
      genresTv.genres
    );
    updatedScifiTv = filterBackdropPath(updatedScifiTv);
    setSciTv(updatedScifiTv);
    //drama

    let dramaTv = await movieService.getTvGenre(18);
    let updatedDramaTv = addGenreNames(
      dramaTv,
      "tv",
      genres.genres,
      genresTv.genres
    );
    updatedDramaTv = filterBackdropPath(updatedDramaTv);
    setDramaTv(updatedDramaTv);
  }

  let trending_titles = trending.map((media) =>
    media.name ? media.name : media.title
  );

  function modalOutput() {
    if (modalOn) {
      return (
        <Modal
          heroSelect={heroSelect}
          active={modalOn}
          setModalOn={setModalOn}
        />
      );
    }
  }
  return (
    <div className="App">
      <Router>
        <Header setSearch={setSearch} />
        {modalOutput()}

        <Routes>
          <Route
            path="/search"
            element={
              <Search
                search={search}
                searchResult={searchResult}
                heroSelect={heroSelect}
                setSearch={setSearch}
                setModalOn={setModalOn}
                setHeroSelect={setHeroSelect}
              />
            }
          />
          <Route
            path="/"
            element={
              <Main
                trending={trending}
                topMovies={topMovies}
                topTv={topTv}
                setHeroSelect={setHeroSelect}
                setModalOn={setModalOn}
                heroSelect={heroSelect}
                setSearch={setSearch}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <Movies
                topMovies={topMovies}
                actionMovies={actionMovies}
                adventureMovies={adventureMovies}
                comedyMovies={comedyMovies}
                horrorMovies={horrorMovies}
                thrillerMovies={thrillerMovies}
                setHeroSelect={setHeroSelect}
                setModalOn={setModalOn}
                heroSelect={heroSelect}
                setSearch={setSearch}
              />
            }
          />
          <Route
            path="/tvshows"
            element={
              <Tv
                topTv={topTv}
                actionTv={actionTv}
                animationTv={animationTv}
                comedyTv={comedyTv}
                sciTv={sciTv}
                dramaTv={dramaTv}
                setHeroSelect={setHeroSelect}
                setModalOn={setModalOn}
                heroSelect={heroSelect}
                setSearch={setSearch}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
