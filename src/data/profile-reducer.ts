import { Dispatch } from "redux";
import { profileAPI } from "../plugins/axios";
import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "./store-redux";
import { ResultCodes } from "../plugins/axiosTypes";
import { ProfileType } from "../components/Profile/ProfileTypes";
import { PhotosType } from "../components/Friends/FriendsTypes";


type initialStateType = {
  posts: Array<{id: number, message: string, likesCount: number}>;
  tempPostText: string;
  profile: {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string | null;
    contacts: {
      github: string;
      vk: string;
      facebook: string;
      instagram: string;
      twitter: string;
      website: string;
      youtube: string;
      mainLink: string;
    };
    photos: PhotosType;
  };
  status: string;
}

let initialState = {
  posts: [
    {
      id: 1,
      message:
        "I learn React.JS!!",
      likesCount: 11,
    },
    {
      id: 2,
      message: "Hello World!!!",
      likesCount: 18,
    },
  ],
  tempPostText: '',
  profile: {
    userId: 0,
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: null,
    contacts: {
      github: '',
      vk: '',
      facebook: '',
      instagram: '',
      twitter: '',
      website: '',
      youtube: '',
      mainLink: '',
    },
    photos: {
      large: '',
      small: '',
    }
  },
  status: '',
}

type rootActionType = InferActionsTypes<typeof actions>;
const profileReducer = (state: initialStateType = initialState, action: rootActionType) => {
  switch (action.type) {
    case 'ADD_POST': {
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
    case 'UPDATE_NEW_POST_TEXT':
      let copyState = {...state};
      copyState.tempPostText = action.startPostValue;
    return copyState;

    case 'SET_USER_PROFILE':
      return {...state, profile: action.profile};

    case 'SET_STATUS':
      return {...state, status: action.status};

    case 'SAVE_PHOTO_SUCCESS':
      return {...state, profile: {...state.profile, photos: action.photos}}

    case 'UPDATE_PROFILE_INFO':
      return {...state, profile: {...state.profile, fullName: action.fullName }}

    default:
      return state;
  }
}

export const actions = {
  addPostActionCreator: (newPostText: string) => ({ type: 'ADD_POST', newPostText} as const),
  updateNewPostTextActionCreator: (text: string) => ({
  type: 'UPDATE_NEW_POST_TEXT',
  startPostValue: text,
  } as const),
  setUserProfileAC: (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const),
  setStatusAC: (status: string) => ({type: 'SET_STATUS', status} as const),
  savePhotoAC: (photos: {small: string | null, large: string | null}) => ({type: 'SAVE_PHOTO_SUCCESS', photos} as const),
  updateProfileInfoAC:  (fullName: string) => ({type: 'UPDATE_PROFILE_INFO', fullName} as const),
}
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, rootActionType>;

export const getUserThunkCreator = (userId: number): ThunkType => {
  return async (dispatch) => {
    let data = await profileAPI.getUser(userId);
    dispatch(actions.setUserProfileAC(data));
  }
}


export const setStatusThunkCreator = (userID: number): ThunkType => {
  return async (dispatch) => {
    let data = await profileAPI.getStatus(userID);
    dispatch(actions.setStatusAC(data));
  }
}


export const updateStatusThunkCreator = (status: string): ThunkType => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === ResultCodes.Success) {
      dispatch(actions.setStatusAC(status));
    }
  }
}


export const updatePhotoThunkCreator = (file: File): ThunkType => {
  return async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === ResultCodes.Success) {
      dispatch(actions.savePhotoAC(response.data.data.photos));
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