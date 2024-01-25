import React from "react";
import classes from "./Actions.module.scss";

export const Actions = () => {
  return (
    <div className={classes.actions}>
      <button type="submit" className={classes.actions__btn}>
        Add friend
      </button>
      <button type="submit" className={classes.actions__btn}>
        Call
      </button>
      <button type="submit" className={classes.actions__btn}>
        Message
      </button>
    </div>
  );
};
