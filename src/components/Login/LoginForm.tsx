import { ErrorMessage, Field, Form, Formik } from "formik";
import { Navigate } from "react-router-dom";
import classes from "./login.module.scss";

const loginFormValidation = (values: any) => {
  const errors = {};
  return errors;
};

const LoginForm = (props: {
  login: (email: string, password: string, rememberMe: boolean) => void;
  isAuth: boolean;
  captchaUrl: string | null;
}) => {
  const submit = (
    values: { email: string; password: string; rememberMe: boolean },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setTimeout(() => {
      props.login(values.email, values.password, values.rememberMe);
      setSubmitting(false);
    }, 400);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div className="">
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validate={loginFormValidation}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form className={classes.form}>
            <Field
              className={classes.form__input}
              type="text"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" />
            <Field
              className={classes.form__input}
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" />
            <button
              className={classes.form__btn}
              type="submit"
              disabled={isSubmitting}
            >
              Log in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
