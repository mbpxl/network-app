import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import classes from "./login.module.scss";
import { getCaptchaUrl, getIsAuth } from "./LoginSelectors";
import { loginThunkCreator } from "../../data/auth-reducer";
import React from "react";

type LoginPropsType = {};

export const Login = React.memo((props: LoginPropsType) => {
  const isAuth = useSelector(getIsAuth);
  const captchaUrl = useSelector(getCaptchaUrl);

  const dispatch = useDispatch<any>();

  const login = (email: string, password: string, rememberMe: boolean) => {
    dispatch(loginThunkCreator(email, password, rememberMe));
  };
  return (
    <div className={classes.login}>
      <h1>LOGIN</h1>
      <LoginForm login={login} isAuth={isAuth} captchaUrl={captchaUrl} />
    </div>
  );
});
