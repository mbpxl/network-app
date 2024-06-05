import React from "react";
import classes from "./Searchbar.module.scss";
import search from "../../../assets/img/profile/profile-search.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FilterType } from "../../../data/friends-reducer";

// The upper *Searchbar

const FriendsSearchFormValidate = (values: FilterType) => {
  const errors = {};
  return errors;
};

export const Searchbar = (props: any) => {
  const submit = (
    values: FilterType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setTimeout(() => {
      //alert(JSON.stringify(values, null, 1));
      setSubmitting(false);
    }, 200);
    props.onFilterChange(values);
  };

  return (
    <div className={classes.searchbar}>
      <Formik
        initialValues={{ term: "" }}
        validate={FriendsSearchFormValidate}
        onSubmit={submit}
        className={classes.searchbar}
      >
        {({ isSubmitting }) => (
          <Form className={classes.searchbar__form}>
            <Field
              type="text"
              name="term"
              className={classes.searchbar__input}
              placeholder={"Find friends"}
            />
            <ErrorMessage name="term" component="div" />
            <button
              type="submit"
              disabled={isSubmitting}
              className={classes.searchbar__btn}
            >
              <img src={search} alt="search" />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
