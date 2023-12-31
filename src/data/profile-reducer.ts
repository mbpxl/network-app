import { actionsType } from "./types";

let initialState = {
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
  tempPostText: '',
}

const profileReducer = (state = initialState, action: actionsType) => {
  switch (action.type) {
    case 'ADD-POST': {
      let newPost = {
        id: 5,
        message: state.tempPostText,
        likesCount: 0,
      };

      let copyState = {...state};
      copyState.posts = [...state.posts];

      state.tempPostText !== '' ? copyState.posts.push(newPost) : alert('Empty post!');

      action.newText = '';

      return copyState;
    }
    case 'UPDATE-NEW-POST-TEXT':
      let copyState = {...state};
      copyState.tempPostText = action.newText;
      return copyState;

    default:
      return state;
  }
}

const ADD_POST = "ADD-POST";
export const addPostActionCreator = () => ({ type: ADD_POST });

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const updateNewPostTextActionCreator = (text: string | undefined) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});


export default profileReducer;