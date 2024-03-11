import LoginForm from "./LoginForm";

export const Login = (props: { login: Function; isAuth: boolean }) => {
  return (
    <div className="">
      <h1>LOGIN</h1>
      <LoginForm login={props.login} isAuth={props.isAuth} />
    </div>
  );
};
