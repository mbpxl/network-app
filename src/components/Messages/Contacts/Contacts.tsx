import classes from "./Contacts.module.scss";
import { ContactItem } from "./ContactsItem/ContactsItem";
import a1 from "../../../assets/img/messages/messages-pre1.png";
import a2 from "../../../assets/img/messages/messages-pre2.png";
import a3 from "../../../assets/img/messages/messages-pre3.png";
import a4 from "../../../assets/img/messages/messages-pre4.png";
import a5 from "../../../assets/img/messages/messages-pre5.png";
import a6 from "../../../assets/img/messages/messages-pre6.png";

let contactsData = [
  {
    id: 1,
    name: "Faraz Tariq",
    lastMessage: "see you in friday",
    avatar: a1,
  },
  {
    id: 2,
    name: "Ilya",
    lastMessage: "ok",
    avatar: a2,
  },
  {
    id: 3,
    name: "Gena",
    lastMessage: "never mind",
    avatar: a3,
  },
  {
    id: 4,
    name: "Masha",
    lastMessage: "what?",
    avatar: a4,
  },
  {
    id: 5,
    name: "Kim",
    lastMessage: "hi",
    avatar: a5,
  },
  {
    id: 6,
    name: "Alina",
    lastMessage: "later",
    avatar: a6,
  },
];

let contactItemElements = contactsData.map((contact) => {
  return (
    <ContactItem
      name={contact.name}
      id={contact.id}
      lastMessage={contact.lastMessage}
      avatar={contact.avatar}
    />
  );
});

export const Contacts = () => {
  return <div className={classes.contacts_content}>{contactItemElements}</div>;
};
