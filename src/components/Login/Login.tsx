import LoginForm from "./LoginForm";

export const Login = (props: {
  login: Function;
  isAuth: boolean;
  captchaUrl: string;
}) => {
  return (
    <div className="">
      <h1>LOGIN</h1>
      <LoginForm
        login={props.login}
        isAuth={props.isAuth}
        captchaUrl={props.captchaUrl}
      />
    </div>
  );
};
