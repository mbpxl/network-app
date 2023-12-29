import StoreContext from "../../../context/StoreContext";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../data/messages-reducer";
import { Dialog } from "./Dialog";

export const DialogContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        const onMessageChange = (text: string) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };

        return (
          <Dialog
            dialogs={store.getState().messagesReducer.dialogs}
            addMessage={addMessage}
            updateNewMessageText={onMessageChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
