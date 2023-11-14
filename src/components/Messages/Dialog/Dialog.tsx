import classes from "./Dialog.module.scss";
import send from "../../../assets/img/messages/messages-send.svg";
import { DialogItem } from "./DialogItem/DialogItem";
import { useRef } from "react";

export const Dialog = (props: any) => {
  const dialogData = props.dialogs;

  const dialogItemElements = dialogData.map(
    (dialog: { id: number; message: String }) => {
      return <DialogItem id={dialog.id} message={dialog.message} />;
    }
  );

  const newSendElement = useRef<HTMLInputElement>(null);

  const sendPost = () => {
    let text = newSendElement.current?.value;
  };

  return (
    <div className={classes.dialog}>
      <div className={classes.dialog__content}>{dialogItemElements}</div>
      <div className={classes.dialog__send}>
        <form className={classes.dialog__form}>
          <input type="text" placeholder="Send Message" ref={newSendElement} />
          <button type="submit" onClick={sendPost}>
            <img src={send} alt="send" />
          </button>
        </form>
      </div>
    </div>
  );
};
