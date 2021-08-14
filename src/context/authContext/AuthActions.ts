import { User } from "./../../types/user";
export const loginStart = () => ({
  type: "LOGIN_START",
});
export const loginSuccess = (user: User) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

// logout

export const logout = () => ({
  type: "LOGOUT",
});
