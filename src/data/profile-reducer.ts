import { Dispatch } from "redux";
import { profileAPI } from "../plugins/axios";
import { ProfileType } from "./types";



type addPostType = {
  type: "ADD_POST";
  newText: string;
}

type updateNewPostTextType = {
  type: "UPDATE_NEW_POST_TEXT";
  newText: string | undefined;
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

const ADD_POST = "ADD_POST";
export const addPostActionCreator = (newText: string): addPostType => ({ type: ADD_POST, newText});

const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
export const updateNewPostTextActionCreator = (text: string | undefined): updateNewPostTextType => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

const SET_USER_PROFILE = "SET_USER_PROFILE";
export const setUserProfileAC = (profile: ProfileType): setUserProfileType => ({type: SET_USER_PROFILE, profile});

const SET_STATUS = "SET_STATUS";
export const setStatusAC = (status: string): setStatusType => ({type: SET_STATUS, status});

const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
export const savePhotoAC = (photos: {small: string | null, large: string | null}): savePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos});

const UPDATE_PROFILE_INFO = "UPDATE_PROFILE_INFO";
export const updateProfileInfoAC = (fullName: string): updateProfileInfoType => ({type: UPDATE_PROFILE_INFO, fullName});


type getUserThunkCreatorType = ReturnType<typeof setUserProfileAC>;
export const getUserThunkCreator = (userId: number) => {
  return (dispatch: Dispatch<getUserThunkCreatorType>) => {
    profileAPI.getUser(userId).then((data) => {
      dispatch(setUserProfileAC(data));
    });
  }
}


type setStatusThunkCreatorType = ReturnType<typeof setStatusAC>;
export const setStatusThunkCreator = (userID: number) => {
  return (dispatch: Dispatch<setStatusThunkCreatorType>) => {
    profileAPI.getStatus(userID).then(data => {
      dispatch(setStatusAC(data));
    })
  }
}


type updateStatusThunkCreatorType = ReturnType<typeof setStatusAC>;
export const updateStatusThunkCreator = (status: string) => {
  return (dispatch: Dispatch<updateStatusThunkCreatorType>) => {
    profileAPI.updateStatus(status).then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setStatusAC(status));
      }
    })
  }
}


type updatePhotoThunkCreatorType = ReturnType<typeof savePhotoAC>;
export const updatePhotoThunkCreator = (file: any) => {
  return async (dispatch: Dispatch<updatePhotoThunkCreatorType>) => {
    let response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === 0) {
      dispatch(savePhotoAC(response.data.data.photos));
    }
  }
}


//? type updateProfileThunkCreatorType = ReturnType<>
export const updateProfileThunkCreator = (fullName: string) => {
  return async (dispatch: Dispatch<any>, getState: Function) => {
    const userId = getState().authReducer.userId
    let response = await profileAPI.updateProfile(fullName);
    if(response.data.resultCode === 0) {
      dispatch(getUserThunkCreator(userId));
    }
  }
}

export default profileReducer;