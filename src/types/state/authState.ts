import { User } from "../user";
export interface IState {
  user: User | null;
  isFetching: boolean;
  error: boolean;
}

export interface IAction {
  type: string;
  payload?: any;
}
