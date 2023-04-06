import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "972be28d547cb88077f9e1f242f1b1d2";

export const getMoviesSearch = () => {
  return axios
    .get("/trending/movie/day", {
      params: {
        api_key: API_KEY,
      },
    })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("error.message");
      }

      return response.data;
    });
};

export const getSearchMovies = (query) => {
  return axios
    .get("/search/movie", {
      params: {
        api_key: API_KEY,
        language: "en-US",
        query,
      },
    })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("error.message");
      }

      return response.data;
    });
};

export const getMoviesId = (id) => {
  return axios
    .get(`/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("error.message");
      }

      return response.data;
    });
};

export const getMovieCast = (id) => {
  return axios
    .get(`/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("error.message");
      }

      return response.data;
    });
};

export const getMovieReviers = (id) => {
  return axios
    .get(`/movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("error.message");
      }

      return response.data;
    });
};
