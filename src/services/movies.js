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
  return request.then((response) => response.data);
};
const exportFunctions = {
  getTrending,
  getTopMovies,
  getGenresMovies,
  getTopTv,
  getGenresTv,
};

export default exportFunctions;
