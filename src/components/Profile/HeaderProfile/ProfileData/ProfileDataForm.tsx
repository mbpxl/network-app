import { ErrorMessage, Field, Form, Formik } from "formik";

export const ProfileDataForm = (props: any) => {
  const submit = (
    values: { fullName: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setTimeout(() => {
      props.updateProfile(values);
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
