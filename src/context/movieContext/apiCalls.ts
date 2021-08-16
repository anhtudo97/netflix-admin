import axios from "axios";
import { Movie } from "../../types/movie";
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./MovieActions";

const token = JSON.parse(localStorage.getItem("user") || "").accessToken;

// GET
export const getMovies = async (dispatch: React.Dispatch<any>) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "Bearer " + token,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

// CREATE
export const createMovie = async (
  movie: Movie,
  dispatch: React.Dispatch<any>
) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("/movies", movie, {
      headers: {
        token: "Bearer " + token,
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (error) {
    dispatch(createMovieFailure());
  }
};

// DELETE
export const deleteMovie = async (
  id: string,
  dispatch: React.Dispatch<any>
) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete(`/movies/:${id}`, {
      headers: {
        token: "Bearer " + token,
      },
    });

    dispatch(deleteMovieSuccess(id));
  } catch (error) {
    dispatch(deleteMovieFailure());
  }
};
