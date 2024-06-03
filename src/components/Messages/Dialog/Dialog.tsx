import React from "react";
import classes from "./Dialog.module.scss";
import send from "../../../assets/img/messages/messages-send.svg";
import { DialogItem } from "./DialogItem/DialogItem";

//======================================================================================================================================

export const Dialog = (props: any) => {
  console.log("PROPS value from messages", props.newMessageText);
  const dialogData = props.dialogs;

  const dialogItemElements = dialogData.map(
    (dialog: { id: number; message: String }) => {
      return <DialogItem id={dialog.id} message={dialog.message} />;
    }
  );

  const onAddMessage = () => {
    props.addMessage();
  };

  const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.updateNewMessageText(e.currentTarget?.value);
  };

  return (
    <div className={classes.dialog}>
      <div className={classes.dialog__content}>{dialogItemElements}</div>
      <div className={classes.dialog__send}>
        <input
          type="text"
          placeholder="Send Message"
          value={props.valueMessage}
          onChange={onMessageChange}
        />
        <button type="submit" onClick={onAddMessage}>
          <img src={send} alt="send" />
        </button>
      </div>
    </div>
  );
};
