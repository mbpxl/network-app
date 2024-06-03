import LoginForm from "./LoginForm";
import classes from "./login.module.scss";

export const Login = (props: {
  login: (email: string, password: string, rememberMe: boolean) => void;
  isAuth: boolean;
  captchaUrl: string | null;
}) => {
  return (
    <div className={classes.login}>
      <h1>LOGIN</h1>
      <LoginForm
        login={props.login}
        isAuth={props.isAuth}
        captchaUrl={props.captchaUrl}
      />
    </div>
  );
};
