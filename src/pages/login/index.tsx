import React, { useCallback, useContext, useState } from "react";
import { login } from "../../context/authContext/apiCall";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./style.scss";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { state, dispatch } = useContext(AuthContext);
  const { isFetching } = state;

  const setEmailData = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const setPasswordData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="text"
          placeholder="email"
          className="loginInput"
          onChange={setEmailData}
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          onChange={setPasswordData}
        />
        <button
          className="loginButton"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
    </div>
  );
}
