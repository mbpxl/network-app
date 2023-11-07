import classes from "./Dialog.module.scss";
import send from "../../../assets/img/messages/messages-send.svg";
import { DialogItem } from "./DialogItem/DialogItem";

export const Dialog = (props: any) => {
  let dialogData = props.dialogs;

  let dialogItemElements = dialogData.map(
    (dialog: { id: number; message: String }) => {
      return <DialogItem id={dialog.id} message={dialog.message} />;
    }
  );

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
