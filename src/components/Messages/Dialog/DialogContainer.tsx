import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../data/messages-reducer";
import { Dialog } from "./Dialog";

const mapStateToProps = (state: any) => {
  return {
    dialogs: state.messagesReducer.dialogs,
    isAuth: state.authReducer.isAuth,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageText: (text: string) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

export const DialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog);
