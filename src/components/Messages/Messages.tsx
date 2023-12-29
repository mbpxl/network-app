import classes from "./Messages.module.scss";
import { Searchbar } from "../Profile/Searchbar/Searchbar";
import { Contacts } from "./Contacts/Contacts";
import { DialogContainer } from "./Dialog/DialogContainer";

export const Messages = (props: any) => {
  // store={props.store}
  return (
    <div className={classes.messages}>
      <Searchbar />
      <div className={classes.messages__flex}>
        <Contacts contacts={props.appState.contacts} />
        <DialogContainer />
      </div>
    </div>
  );
};
