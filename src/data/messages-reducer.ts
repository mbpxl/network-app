import avatar1 from "../assets/img/messages/messages-pre1.png"
import avatar2 from "../assets/img/messages/messages-pre2.png"
import avatar3 from "../assets/img/messages/messages-pre3.png"
import avatar4 from "../assets/img/messages/messages-pre4.png"
import { friendsActionTypes } from "../components/Friends/FriendsTypes"

//!------------------------------------------------------------------------
//*THIS IS COMPONENT WITHOUT API CONNECTIONS. LET'S LEAVE IT WITHOUT TYPING
//!------------------------------------------------------------------------


let initialState = {
  dialogs: [
      { id: 1, message: "Hop" },
      { id: 2, message: "Hey" },
      { id: 3, message: "La-la-ley" },
  ],
  contacts: [
    {
      id: 1,
      name: "Smith",
      lastMessage: "see you in friday",
      avatar: avatar1,
    },
    {
      id: 2,
      name: "Alexandr",
      lastMessage: "ok",
      avatar: avatar2,
    },
    {
      id: 3,
      name: "Rone",
      lastMessage: "never mind",
      avatar: avatar3,
    },
    {
      id: 4,
      name: "Ilya",
      lastMessage: "what?",
      avatar: avatar4,
    },
  ],
  tempMessageText: '',
}


export const messagesReducer = (state = initialState, action: friendsActionTypes) => {
  switch (action.type) {
    case 'ADD-MESSAGE': {
      let newMessage = {
        id: 4,
        message: state.tempMessageText,
      };

      let copyState = {...state};
      copyState.dialogs = [...state.dialogs];

      copyState.dialogs.push(newMessage);
      copyState.tempMessageText = '';
    return copyState;
    };

    case 'UPDATE-NEW-MESSAGE-TEXT':
      let copyState = {...state};
      copyState.tempMessageText = action.newMessage;
    return copyState;

    default:
      return state;
  }
}

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (text: string | undefined) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});
