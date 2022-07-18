import axios from "axios";
const baseUrl = "https://api.themoviedb.org/3";
const key = "?api_key=31de40b2f66f71854161703954d6ca93";

const getTrending = () => {
  const request = axios.get(baseUrl + "/trending/all/day" + key);
  return request.then((response) => response.data);
};

const getTopMovies = () => {
  const request = axios.get(baseUrl + "/movie/top_rated" + key);
  return request.then((response) => response.data);
};

const getGenresMovies = () => {
  const request = axios.get(baseUrl + "/genre/movie/list" + key);
  return request.then((response) => response.data);
};
const getGenresTv = () => {
  const request = axios.get(baseUrl + "/genre/tv/list" + key);
  return request.then((response) => response.data);
};
const getTopTv = () => {
  const request = axios.get(baseUrl + "/tv/top_rated" + key);
  return request.then((response) => {
    console.log("top tv", response.data);
    return response.data;
  });
};
const getVideoMovie = (id) => {
  const request = axios.get(baseUrl + "/movie/" + id + "/videos" + key);
  return request.then((response) => {
    console.log("video movie", response.data);
    return response.data;
  });
};
const getVideoTv = (id) => {
  const request = axios.get(baseUrl + "/tv/" + id + "/videos" + key);
  return request.then((response) => response.data);
};
const getMoviesGenre = (id) => {
  const request = axios.get(
    baseUrl +
      "/discover/movie" +
      key +
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" +
      id +
      "&with_watch_monetization_types=flatrate"
  );
  return request.then((response) => {
    return response.data;
  });
};

const getTvGenre = (id) => {
  const request = axios.get(
    baseUrl +
      "/discover/tv" +
      key +
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" +
      id +
      "&with_watch_monetization_types=flatrate"
  );
  return request.then((response) => {
    return response.data;
  });
};

const search = (query) => {
  let url =
    baseUrl +
    "/search/multi" +
    key +
    "&language=en-US&query=" +
    query +
    "&page=1&include_adult=false";
  const request = axios.get(url);
  return request.then((response) => response.data);
};
const exportFunctions = {
  getTrending,
  getTopMovies,
  getGenresMovies,
  getTopTv,
  getGenresTv,
  getVideoMovie,
  getVideoTv,
  getMoviesGenre,
  getTvGenre,
  search,
};

export default exportFunctions;
