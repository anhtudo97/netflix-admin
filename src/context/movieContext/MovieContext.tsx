import { MovieReducer } from "./MovieReducer";
import React, { createContext, useReducer } from "react";
import { IState } from "../../types/state/movieState";

const INITIAL_STATE: IState = {
  movies: [],
  isFetching: false,
  error: false,
};

export const MovieContext = createContext<{
  state: IState;
  dispatch: React.Dispatch<any>;
}>({ state: INITIAL_STATE, dispatch: () => null });

export const MovieContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

  return (
    <MovieContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
