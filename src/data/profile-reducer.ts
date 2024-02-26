import { profileAPI } from "../plugins/axios";
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
  profile: null,
}

const profileReducer = (state = initialState, action: actionsType) => {
  switch (action.type) {
    case ADD_POST: {
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
    case UPDATE_NEW_POST_TEXT:
      return {...state, tempPostText: action.newText};

    case SET_USER_PROFILE:
      return {...state, profile: action.profile};

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

const SET_USER_PROFILE = "SET_USER_PROFILE";
export const setUserProfileAC = (profile: any) => ({type: SET_USER_PROFILE, profile});


export const getUserThunkCreator = (userId: number) => {
  return (dispatch: Function) => {
    profileAPI.getUser(userId).then((data) => {
      dispatch(setUserProfileAC(data));
    });
  }
}

export default profileReducer;