import { createContext, useEffect, useReducer } from "react";
import { IState } from "../../types/auth";
import { AuthReducer } from "./AuthReducer";

const INITIAL_STATE: IState = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext<{
  state: IState;
  dispatch: React.Dispatch<any>;
}>({ state: INITIAL_STATE, dispatch: () => null });

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
