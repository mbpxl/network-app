import React from "react";
import classes from "./Searchbar.module.scss";
import search from "../../../assets/img/profile/profile-search.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";

// The upper *Searchbar

const FriendsSearchFormValidate = (values: FriendsSearchFormType) => {
  const errors = {};
  return errors;
};

type FriendsSearchFormType = {
  term: string;
};

export const Searchbar = () => {
  const submit = (
    values: FriendsSearchFormType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 1));
      setSubmitting(false);
    }, 200);
  };

  return (
    <div className={classes.searchbar}>
      <Formik
        initialValues={{ term: "" }}
        validate={FriendsSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <ErrorMessage name="term" component="div" />
            <button type="submit" disabled={isSubmitting}>
              <img src={search} alt="search" />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
