import axios from "axios";
import { User } from "../../types/user";
import { loginStart, loginSuccess, loginFailure } from "./AuthActions";

export const login = async (user: User, dispatch: React.Dispatch<any>) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
