import classes from "./Contacts.module.scss";
import { ContactItem } from "./ContactsItem/ContactsItem";
// import a1 from "../../../assets/img/messages/messages-pre1.png";
// import a2 from "../../../assets/img/messages/messages-pre2.png";
// import a3 from "../../../assets/img/messages/messages-pre3.png";
// import a4 from "../../../assets/img/messages/messages-pre4.png";
// import a5 from "../../../assets/img/messages/messages-pre5.png";
// import a6 from "../../../assets/img/messages/messages-pre6.png";

export const Contacts = (props: any) => {
  let contactsData = props.contacts;

  let contactItemElements = contactsData.map(
    (contact: {
      name: String;
      id: Number;
      lastMessage: String;
      avatar: string;
    }) => {
      return (
        <ContactItem
          name={contact.name}
          id={contact.id}
          lastMessage={contact.lastMessage}
          avatar={contact.avatar}
        />
      );
    }
  );

  return <div className={classes.contacts_content}>{contactItemElements}</div>;
};
