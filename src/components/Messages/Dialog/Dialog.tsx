import classes from "./Dialog.module.scss";
import send from "../../../assets/img/messages/messages-send.svg";
import { DialogItem } from "./DialogItem/DialogItem";

export const Dialog = () => {
  let contactsData = [
    { id: 1, message: "Hop" },
    { id: 2, message: "Hey" },
    { id: 3, message: "La-la-ley" },
  ];

  let dialogItemElements = contactsData.map((dialog) => {
    return <DialogItem id={dialog.id} message={dialog.message} />;
  });

  return (
    <div className={classes.dialog}>
      <div className={classes.dialog__content}>{dialogItemElements}</div>
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
