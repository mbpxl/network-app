import { NavLink } from "react-router-dom";
import classes from "./ContactsItem.module.scss";
import avatar1 from "../../../../assets/img/messages/messages-pre1.png";

type PropsType = {
  name: String;
  id: Number;
  lastMessage: String;
};

export const ContactItem = (props: PropsType) => {
  return (
    <NavLink to={"/messages/" + props.id} className={classes.contacts__link}>
      <img src={avatar1} alt="pre" />
      <div className={classes.contacts__info}>
        <h1>{props.name}</h1>
        <h2>{props.lastMessage}</h2>
      </div>
    </NavLink>
  );
};
