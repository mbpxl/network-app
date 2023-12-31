import classes from "./Dialog.module.scss";
import send from "../../../assets/img/messages/messages-send.svg";
import { DialogItem } from "./DialogItem/DialogItem";
import { useRef } from "react";

//======================================================================================================================================

export const Dialog = (props: any) => {
  const dialogData = props.dialogs;

  const dialogItemElements = dialogData.map(
    (dialog: { id: number; message: String }) => {
      return <DialogItem id={dialog.id} message={dialog.message} />;
    }
  );

  const onAddMessage = () => {
    props.addMessage();
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const onMessageChange = () => {
    const text = inputRef.current?.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={classes.dialog}>
      <div className={classes.dialog__content}>{dialogItemElements}</div>
      <div className={classes.dialog__send}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Send Message"
          value={props.newMessageText}
          onChange={onMessageChange}
        />
        <button type="submit" onClick={onAddMessage}>
          <img src={send} alt="send" />
        </button>
      </div>
    </div>
  );
};
