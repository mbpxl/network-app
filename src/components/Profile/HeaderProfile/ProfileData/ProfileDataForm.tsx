import { ErrorMessage, Field, Form, Formik } from "formik";
import { ProfileDataFormPropsType } from "../../ProfileTypes";

export const ProfileDataForm = (props: ProfileDataFormPropsType) => {
  const submit = (
    values: { fullName: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setTimeout(() => {
      props.updateProfile(values.fullName);
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="">
      <Formik
        initialValues={{ fullName: props.profile.fullName }}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="fullName" />
            <ErrorMessage name="fullName" component="div" />
            <Field type="checkbox" name="lookingForAJob" />
            <ErrorMessage name="lookingForAJob" component="div" />
            <Field type="text" name="aboutMe" />
            <ErrorMessage name="aboutMe" component="div" />
            <Field type="text" name="lookingForAJobDescription" />
            <ErrorMessage name="lookingForAJobDescription" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
