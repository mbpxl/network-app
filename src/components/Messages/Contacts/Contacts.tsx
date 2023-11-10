import classes from "./Contacts.module.scss";
import { ContactItem } from "./ContactsItem/ContactsItem";

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
