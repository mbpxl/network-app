import classes from "./Dialog.module.scss";
import send from "../../../assets/img/messages/messages-send.svg";
import { DialogItem } from "./DialogItem/DialogItem";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../data/messages-reducer";
import { useRef } from "react";
import { Dialog } from "./Dialog";

export const DialogContainer = (props: any) => {
  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  const onMessageChange = (text: string) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialog
      dialogs={props.store.getState().messagesReducer.dialogs}
      addMessage={addMessage}
      updateNewMessageText={onMessageChange}
    />
  );
};
