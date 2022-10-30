import axios from "axios";

const API_KEY ="f9dd15ebb2e93eadea3d7128518367b2";
const BASE_URL = "https://api.themoviedb.org/3/";

export async function getPopularMovie() {
	try {
	  const responce = await axios.get(
		`${BASE_URL}trending/movie/week?api_key=${API_KEY}&language='en-US'`
	  );
	  return responce.data.results;
	} catch (error) {
	  console.log(error.message);
	}
  }
  
  export async function getSearchMovie(query) {
	try {
	  const responce = await axios.get(
		`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&language='en-US'`
	  );
	  return responce.data;
	} catch (error) {
	  console.log(error.message);
	}
  }
  
  export async function getMovieDetails(id) {
	try {
	  const responce = await axios.get(
		`${BASE_URL}movie/${id}?api_key=${API_KEY}&language='en-US'`
	  );
	  return responce.data;
	} catch (error) {
	  console.log(error.message);
	}
  }
  
  export async function getMovieCast(id) {
	try {
	  const responce = await axios.get(
		`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language='en-US'`
	  );
	  return responce.data;
	} catch (error) {
	  console.log(error.message);
	}
  }
  
  export async function getMoviesReviews(id) {
	try {
	  const responce = await axios.get(
		`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language='en-US'`
	  );
	  return responce.data;
	} catch (error) {
	  console.log(error.message);
	}
  }
