import avatar1 from "../assets/img/messages/messages-pre1.png"
import avatar2 from "../assets/img/messages/messages-pre2.png"
import avatar3 from "../assets/img/messages/messages-pre3.png"
import avatar4 from "../assets/img/messages/messages-pre4.png"
import avatar5 from "../assets/img/messages/messages-pre5.png"
import avatar6 from "../assets/img/messages/messages-pre6.png"

let rerenderEntireTree = () => {
  console.log('state has been changed');
}


export const state = {
  profilePage: {
    posts: [
      {
        id: 1,
        message:
          "What you need to do for this is very simple. Register and click the Become a Creator button. Making money is not far off. Come on, be a creator",
        likesCount: 11,
      },
      {
        id: 2,
        message: "Hello World!!!",
        likesCount: 18,
      },
    ],
    newPostText: '',
  },

  messagesPage: {
    dialogs: [
      { id: 1, message: "Hop" },
      { id: 2, message: "Hey" },
      { id: 3, message: "La-la-ley" },
    ],
    contacts: [
      {
        id: 1,
        name: "Faraz Tariq",
        lastMessage: "see you in friday",
        avatar: avatar1,
      },
      {
        id: 2,
        name: "Ilya",
        lastMessage: "ok",
        avatar: avatar2,
      },
      {
        id: 3,
        name: "Gena",
        lastMessage: "never mind",
        avatar: avatar3,
      },
      {
        id: 4,
        name: "Masha",
        lastMessage: "what?",
        avatar: avatar4,
      },
      {
        id: 5,
        name: "Kim",
        lastMessage: "hi",
        avatar: avatar5,
      },
      {
        id: 6,
        name: "Alina",
        lastMessage: "later",
        avatar: avatar6,
      },
    ],
    newMessageText: '',
  },

  friendsPage: {
    friends: [
      {id: 1, name: "John Ramirez", avatar: avatar1},
      {id: 2, name: "Kevin Lopez", avatar: avatar2},
      {id: 3, name: "Anthony Dunn", avatar: avatar3},
      {id: 4, name: "Michael Williams", avatar: avatar4},
      {id: 5, name: "Steven Williamson", avatar: avatar5},
      {id: 6, name: "Bryan Hoffman", avatar: avatar6},
    ]
  },
};

export const subscribe = (observer: any) => {
  rerenderEntireTree = observer;
}


export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree();
};

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
};

export const addMessage = () => {
  let newMesage = {
    id: 4,
    message: state.messagesPage.newMessageText,
  };

  state.messagesPage.dialogs.push(newMesage);
  state.messagesPage.newMessageText='';
  rerenderEntireTree();
};

export const updateNewMessageText = (newMessage: string) => {
  state.messagesPage.newMessageText = newMessage;
  rerenderEntireTree();
};