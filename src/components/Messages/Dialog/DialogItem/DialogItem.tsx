import classes from "./Dialog.module.scss";

type PropsType = {
  message: String;
};

export const DialogItem = (props: PropsType) => {
  return <div className={classes.dialog__message}>{props.message}</div>;
};
