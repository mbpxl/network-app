import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../data/messages-reducer";
import { Dialog } from "./Dialog";
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";
import { compose } from "redux";
import { AppStateType } from "../../../data/store-redux";

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogs: state.messagesReducer.dialogs,
    valueMessage: state.messagesReducer.tempMessageText,
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

export const DialogContainer: any = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialog);
