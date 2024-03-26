import { ErrorMessage, Field, Form, Formik } from "formik";
import { Navigate } from "react-router-dom";

const loginFormValidation = (values: any) => {
  const errors = {};
  return errors;
};

const LoginForm = (props: {
  login: Function;
  isAuth: boolean;
  captchaUrl: string;
}) => {
  console.log(props.captchaUrl);
  const submit = (
    values: { email: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setTimeout(() => {
      console.log(values.email, values.password);
      console.log(JSON.stringify(values, null, 2));
      props.login(values.email, values.password);
      setSubmitting(false);
    }, 400);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div className="">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={loginFormValidation}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
