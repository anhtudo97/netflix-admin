import { List } from "../list";

export interface IState {
  lists: List[] | [];
  isFetching: boolean;
  error: boolean;
}

export interface IAction {
  type: string;
  payload?: any;
}
