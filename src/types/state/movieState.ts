import { Movie } from "../movie";

export interface IState {
  movies: Movie[] | [];
  isFetching: boolean;
  error: boolean;
}

export interface IAction {
  type: string;
  payload?: any;
}
