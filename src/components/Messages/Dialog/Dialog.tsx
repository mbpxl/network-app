import classes from "./Dialog.module.scss";
import send from "../../../assets/img/messages/messages-send.svg";
import { DialogItem } from "./DialogItem/DialogItem";
import { ChangeEvent } from "react";

export const Dialog = (props: any) => {
  const dialogData = props.dialogs;

  const dialogItemElements = dialogData.map(
    (dialog: { id: number; message: String }) => {
      return <DialogItem id={dialog.id} message={dialog.message} />;
    }
  );

  const addMessage = () => {
    props.addMessage();
  };

  const onMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.updateNewMessageText(e.currentTarget.value);
  };

  return (
    <div className={classes.dialog}>
      <div className={classes.dialog__content}>{dialogItemElements}</div>
      <div className={classes.dialog__send}>
        <input
          type="text"
          placeholder="Send Message"
          value={props.newMessageText}
          onChange={onMessageChange}
        />
        <button type="submit" onClick={addMessage}>
          <img src={send} alt="send" />
        </button>
      </div>
    </div>
  );
};
