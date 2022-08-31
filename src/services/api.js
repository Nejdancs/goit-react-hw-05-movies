import axios from 'axios';

const apiConfig = {
  API_KEY: '06cf6ee022a0922eb5200ae030143d7b',
  API_BASE_URL: 'https://api.themoviedb.org/3/',
  TRENDING: '/trending/movie/day',
  SEARCH: 'search/movie',
  DETAILS: '/movie',
  ACTORS: '/movie',
  REVIEWS: '/movie',
};

axios.defaults.baseURL = apiConfig.API_BASE_URL;

const baseSearchParams = {
  api_key: apiConfig.API_KEY,
};

export async function getTrendingMovies(page) {
  try {
    const res = await axios.get(apiConfig.TRENDING, {
      params: { ...baseSearchParams, page },
    });

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getMovieByKey(key, page) {
  try {
    const res = await axios.get(apiConfig.SEARCH, {
      params: { ...baseSearchParams, query: key, page },
    });

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getMovieDetails(id) {
  try {
    const res = await axios.get(`${apiConfig.DETAILS}/${id}`, {
      params: baseSearchParams,
    });

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getMovieActors(id) {
  try {
    const res = await axios.get(`${apiConfig.DETAILS}/${id}/credits`, {
      params: baseSearchParams,
    });

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}
export async function getMovieReviews(id) {
  try {
    const res = await axios.get(`${apiConfig.DETAILS}/${id}/reviews`, {
      params: baseSearchParams,
    });

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}
