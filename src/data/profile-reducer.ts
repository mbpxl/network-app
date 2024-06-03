import { Dispatch } from "redux";
import { profileAPI } from "../plugins/axios";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./store-redux";
import { ProfileType } from "./types";
import { ResultCodes } from "../plugins/axiosTypes";




type addPostType = {
  type: "ADD_POST";
  newPostText: string |undefined;
}

type updateNewPostTextType = {
  type: "UPDATE_NEW_POST_TEXT";
  startPostValue: string;
}

type setUserProfileType = {
  type: "SET_USER_PROFILE";
  profile: ProfileType;
}

type setStatusType = {
  type: "SET_STATUS";
  status: string;
}

type savePhotoSuccessType = {
  type: "SAVE_PHOTO_SUCCESS";
  photos: {small: string | null, large: string | null};
}

type updateProfileInfoType = {
  type: "UPDATE_PROFILE_INFO";
  fullName: string;
}

type initialStateType = {
  posts: Array<{id: number, message: string, likesCount: number}>;
  tempPostText: string;
  profile: {
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string | null;
    aboutMe: string | null;
  };
  status: string;
}

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

type rootActionType = addPostType | updateNewPostTextType | setUserProfileType | setStatusType | savePhotoSuccessType | updateProfileInfoType;
const profileReducer = (state: initialStateType = initialState, action: rootActionType) => {
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

      copyState.tempPostText = '';

      return copyState;
    }
    case UPDATE_NEW_POST_TEXT:
      console.log("profile-reducer called");
      let copyState = {...state};
      copyState.tempPostText = action.startPostValue;
    return copyState;

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

const ADD_POST = "ADD_POST";
export const addPostActionCreator = (newPostText: string): addPostType => ({ type: ADD_POST, newPostText});

const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
export const updateNewPostTextActionCreator = (text: string): updateNewPostTextType => ({
  type: UPDATE_NEW_POST_TEXT,
  startPostValue: text,
});

const SET_USER_PROFILE = "SET_USER_PROFILE";
export const setUserProfileAC = (profile: ProfileType): setUserProfileType => ({type: SET_USER_PROFILE, profile});

const SET_STATUS = "SET_STATUS";
export const setStatusAC = (status: string): setStatusType => ({type: SET_STATUS, status});

const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
export const savePhotoAC = (photos: {small: string | null, large: string | null}): savePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos});

const UPDATE_PROFILE_INFO = "UPDATE_PROFILE_INFO";
export const updateProfileInfoAC = (fullName: string): updateProfileInfoType => ({type: UPDATE_PROFILE_INFO, fullName});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, rootActionType>;

export const getUserThunkCreator = (userId: number): ThunkType => {
  return async (dispatch) => {
    let data = await profileAPI.getUser(userId);
    dispatch(setUserProfileAC(data));
  }
}


export const setStatusThunkCreator = (userID: number): ThunkType => {
  return async (dispatch) => {
    let data = await profileAPI.getStatus(userID);
    dispatch(setStatusAC(data));
  }
}


export const updateStatusThunkCreator = (status: string): ThunkType => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === ResultCodes.Success) {
      dispatch(setStatusAC(status));
    }
  }
}


export const updatePhotoThunkCreator = (file: File): ThunkType => {
  return async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === ResultCodes.Success) {
      dispatch(savePhotoAC(response.data.data.photos));
    }
  }
}


export const updateProfileThunkCreator = (fullName: string): ThunkType => {
  return async (dispatch: Dispatch<any>, getState: Function) => {
    const userId = getState().authReducer.userId
    let response = await profileAPI.updateProfile(fullName);
    if(response.data.resultCode === ResultCodes.Success) {
      dispatch(getUserThunkCreator(userId));
    }
  }
}

export default profileReducer;