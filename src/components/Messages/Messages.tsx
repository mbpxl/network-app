import classes from "./Messages.module.scss";
import { Searchbar } from "../Profile/Searchbar/Searchbar";
import { Contacts } from "./Contacts/Contacts";
import { Dialog } from "./Dialog/Dialog";

export const Messages = () => {
  return (
    <div className={classes.messages}>
      <Searchbar />
      <div className={classes.messages__flex}>
        <Contacts />
        <Dialog />
      </div>
    </div>
  );
};