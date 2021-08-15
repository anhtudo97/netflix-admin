import { ListReducer } from "./ListReducer";
import React, { createContext, useReducer } from "react";
import { IState } from "../../types/state/listState";

const INITIAL_STATE: IState = {
  lists: [],
  isFetching: false,
  error: false,
};

export const ListContext = createContext<{
  state: IState;
  dispatch: React.Dispatch<any>;
}>({ state: INITIAL_STATE, dispatch: () => null });

export const ListContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(ListReducer, INITIAL_STATE);

  return (
    <ListContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
