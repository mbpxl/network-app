import { profileAPI } from "../plugins/axios";
import { ProfileType, actionsType } from "./types";

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
  profile: null as unknown as ProfileType,
  status: '',
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

      state.tempPostText !== '' ? copyState.posts.unshift(newPost) : alert('Empty post!');

      action.newText = '';

      return copyState;
    }
    case UPDATE_NEW_POST_TEXT:
      return {...state, tempPostText: action.newText};

    case SET_USER_PROFILE:
      return {...state, profile: action.profile};

    case SET_STATUS:
      return {...state, status: action.status};

    case SAVE_PHOTO_SUCCESS:
      return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}

    case UPDATE_PROFILE_INFO:
      return {...state, profile: {...state.profile, fullName: action.fullName }}

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

const SET_STATUS = "SET_STATUS";
export const setStatusAC = (status: string) => ({type: SET_STATUS, status});

const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
export const savePhotoAC = (photos: any) => ({type: SAVE_PHOTO_SUCCESS, photos});

const UPDATE_PROFILE_INFO = "UPDATE_PROFILE_INFO";
export const updateProfileInfoAC = (fullName: string) => ({type: UPDATE_PROFILE_INFO, fullName});


export const getUserThunkCreator = (userId: number) => {
  return (dispatch: Function) => {
    profileAPI.getUser(userId).then((data) => {
      dispatch(setUserProfileAC(data));
    });
  }
}

export const setStatusThunkCreator = (userID: number) => {
  return (dispatch: Function) => {
    profileAPI.getStatus(userID).then(data => {
      dispatch(setStatusAC(data));
    })
  }
}

export const updateStatusThunkCreator = (status: string) => {
  return (dispatch: Function) => {
    profileAPI.updateStatus(status).then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setStatusAC(status));
      }
    })
  }
}

export const updatePhotoThunkCreator = (file: any) => {
  return async (dispatch: Function) => {
    let response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === 0) {
      dispatch(savePhotoAC(response.data.data.photos));
    }
  }
}

export const updateProfileThunkCreator = (fullName: string) => {
  return async (dispatch: Function, getState: Function) => {
    const userId = getState().authReducer.userId
    let response = await profileAPI.updateProfile(fullName);
    if(response.data.resultCode === 0) {
      dispatch(getUserThunkCreator(userId));
    }
  }
}

export default profileReducer;