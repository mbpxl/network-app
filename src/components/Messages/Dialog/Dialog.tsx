import classes from "./Dialog.module.scss";
import send from "../../../assets/img/messages/messages-send.svg";
import { DialogItem } from "./DialogItem/DialogItem";

export const Dialog = () => {
  let contactsData = [
    { id: 1, name: "Faraz Tariq", message: "Hop" },
    { id: 2, name: "Ilya", message: "Hey" },
    { id: 3, name: "Gena", message: "La-la-ley" },
  ];

  return (
    <div className={classes.dialog}>
      <div className={classes.dialog__content}>
        <div className={classes.dialog__message}>
          <DialogItem message={contactsData[0].message} />
        </div>
        <div className={classes.dialog__message}>
          <DialogItem message={contactsData[1].message} />
        </div>
        <div className={classes.dialog__message}>
          <DialogItem message={contactsData[2].message} />
        </div>
      </div>
      <div className={classes.dialog__send}>
        <form className={classes.dialog__form}>
          <input type="text" placeholder="Send Message" />
          <button type="submit">
            <img src={send} alt="send" />
          </button>
        </form>
      </div>
    </div>
  );
};
