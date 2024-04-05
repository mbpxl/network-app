import LoginForm from "./LoginForm";
import classes from "./login.module.scss";

export const Login = (props: {
  login: Function;
  isAuth: boolean;
  captchaUrl: string;
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
