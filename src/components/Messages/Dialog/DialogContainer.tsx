import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../data/messages-reducer";
import { Dialog } from "./Dialog";
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";

const mapStateToProps = (state: any) => {
  return {
    dialogs: state.messagesReducer.dialogs,
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

const AuthRedirectComponent = withAuthRedirect(Dialog);

export const DialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);
