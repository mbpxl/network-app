import classes from "./Contacts.module.scss";
import avatar1 from "../../../assets/img/messages/messages-pre1.png";
import avatar2 from "../../../assets/img/messages/messages-pre2.png";
import avatar3 from "../../../assets/img/messages/messages-pre3.png";
import avatar4 from "../../../assets/img/messages/messages-pre4.png";
import avatar5 from "../../../assets/img/messages/messages-pre5.png";
import avatar6 from "../../../assets/img/messages/messages-pre6.png";
import { NavLink } from "react-router-dom";
import { ContactItem } from "./ContactsItem/ContactsItem";

export const Contacts = () => {
  let contactsData = [
    { id: 1, name: "Faraz Tariq", lastMessage: "see you in friday" },
    { id: 2, name: "Ilya", lastMessage: "ok" },
    { id: 3, name: "Gena", lastMessage: "never mind" },
    { id: 4, name: "Masha", lastMessage: "what?" },
    { id: 5, name: "Kim", lastMessage: "hi" },
    { id: 6, name: "Alina", lastMessage: "later" },
  ];

  return (
    <div className={classes.contacts}>
      <ul className={classes.contacts__list}>
        <li className={classes.contacts__item + " " + classes.active}>
          <ContactItem
            name={contactsData[0].name}
            id={contactsData[0].id}
            lastMessage={contactsData[0].lastMessage}
          />
        </li>
        <li className={classes.contacts__item}>
          <ContactItem
            name={contactsData[1].name}
            id={contactsData[1].id}
            lastMessage={contactsData[1].lastMessage}
          />
        </li>
        <li className={classes.contacts__item}>
          <ContactItem
            name={contactsData[2].name}
            id={contactsData[2].id}
            lastMessage={contactsData[2].lastMessage}
          />
        </li>
        <li className={classes.contacts__item}>
          <ContactItem
            name={contactsData[3].name}
            id={contactsData[3].id}
            lastMessage={contactsData[3].lastMessage}
          />
        </li>
        <li className={classes.contacts__item}>
          <ContactItem
            name={contactsData[4].name}
            id={contactsData[4].id}
            lastMessage={contactsData[4].lastMessage}
          />
        </li>
        <li className={classes.contacts__item}>
          <ContactItem
            name={contactsData[5].name}
            id={contactsData[5].id}
            lastMessage={contactsData[5].lastMessage}
          />
        </li>
      </ul>
    </div>
  );
};
