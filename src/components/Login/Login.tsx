import LoginForm from "./LoginForm";

export const Login = (props: {
  login: Function;
  isAuth: boolean;
  captchaUrl: string;
}) => {
  console.log(props.captchaUrl);
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
