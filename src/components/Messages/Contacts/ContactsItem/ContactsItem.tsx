import { NavLink } from "react-router-dom";
import classes from "./ContactsItem.module.scss";
import "../../../../assets/img/messages/messages-pre1.png";
import "../../../../assets/img/messages/messages-pre2.png";
import "../../../../assets/img/messages/messages-pre3.png";
import "../../../../assets/img/messages/messages-pre4.png";
import "../../../../assets/img/messages/messages-pre5.png";
import "../../../../assets/img/messages/messages-pre6.png";

type PropsType = {
  name: String;
  id: Number;
  lastMessage: String;
  avatar: string;
};

export const ContactItem = (props: PropsType) => {
  return (
    <div className={classes.item}>
      <NavLink to={"/messages/" + props.id} className={classes.contacts__link}>
        <img src={props.avatar} alt="pre" />
        <div className={classes.contacts__info}>
          <h1>{props.name}</h1>
          <h2>{props.lastMessage}</h2>
        </div>
      </NavLink>
    </div>
  );
};
