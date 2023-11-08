import classes from "./Messages.module.scss";
import { Searchbar } from "../Profile/Searchbar/Searchbar";
import { Contacts } from "./Contacts/Contacts";
import { Dialog } from "./Dialog/Dialog";

export const Messages = (props: any) => {
  return (
    <div className={classes.messages}>
      <Searchbar />
      <div className={classes.messages__flex}>
        <Contacts contacts={props.state.contacts} />
        <Dialog dialogs={props.state.dialogs} />
      </div>
    </div>
  );
};
