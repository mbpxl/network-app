import { actionTypes } from "./actionTypes";

const messagesReducer = (state: any, action: actionTypes) => {
  switch (action.type) {
    case 'ADD-MESSAGE':
      let newMesage = {
        id: 4,
        message: state.newMessageText,
      };

      state.dialogs.push(newMesage);
      state.newMessageText='';
    break;

    case 'UPDATE-NEW-MESSAGE-TEXT':
      state.newMessageText = action.newMessage;
    break;

    default:
      console.log('Hello world!');
  }

  return state;
}


export default messagesReducer;