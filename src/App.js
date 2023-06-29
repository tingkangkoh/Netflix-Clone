import React from "react";
import { useEffect, useState,useReducer } from "react";
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
    console.log("movies",movies)
    console.log("movies.results",movies.results)
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


  async function getSetData(movieServiceGetter,genres,genresTv,type,stateSetter,genreNumber=""){
    let data;
    if(genreNumber){
      data=await movieServiceGetter(genreNumber)
    }
    else{
      data=await movieServiceGetter();
    }
    let updatedData = addGenreNames(
      data,
      type,
      genres.genres,
      genresTv.genres
    );
    updatedData=filterBackdropPath(updatedData);
    stateSetter(updatedData);
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



    getSetData(movieService.getTopMovies,genres,genresTv,"movies",setTopMovies);
    getSetData(movieService.getTopTv,genres,genresTv,"tv",setTopTv);
    getSetData(movieService.getMoviesGenre,genres,genresTv,"movies",setActionMovies,28);
    getSetData(movieService.getMoviesGenre,genres,genresTv,"movies",setAdventureMovies,12);
    getSetData(movieService.getMoviesGenre,genres,genresTv,"movies",setComedyMovies,35);
    getSetData(movieService.getMoviesGenre,genres,genresTv,"movies",setHorrorMovies,27);
    getSetData(movieService.getMoviesGenre,genres,genresTv,"movies",setThrillerMovies,53);
    getSetData(movieService.getTvGenre,genres,genresTv,"tv",setActionTv,10759);
    getSetData(movieService.getTvGenre,genres,genresTv,"tv",setAnimationTv,16);
    getSetData(movieService.getTvGenre,genres,genresTv,"tv",setComedyTv,35);
    getSetData(movieService.getTvGenre,genres,genresTv,"tv",setDramaTv,18);
    getSetData(movieService.getTvGenre,genres,genresTv,"tv",setSciTv,10765);
    
  }


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
