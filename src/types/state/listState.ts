import { List } from "../list";

export interface IState {
  user: List[] | null;
  isFetching: boolean;
  error: boolean;
}

export interface IAction {
  type: string;
  payload?: any;
}
