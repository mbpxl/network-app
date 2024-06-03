import { loginAPI, securityAPI } from "../plugins/axios";
import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "./store-redux";
import { ResultCodes } from "../plugins/axiosTypes";


type initialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isFetching: boolean;
  isAuth: boolean;
  captchaUrl: string | null;
}

type PayloadType = {
  payload: {
    url: string;
  }
}

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null,
}

type rootActionType = InferActionsTypes<typeof actions>;

export const authReducer = (state: initialStateType = initialState, action: rootActionType): initialStateType => {
  switch(action.type) {
    case 'SET_USER_DATA': {
      return {
        ...state,
        ...action.data,
      }
    }

    case 'GET_CAPTCHA_URL_SUCCESS': {
      return {...state, ...action.payload as unknown as PayloadType}
    }

    default: {
      return state;
    }
  }
}

export const actions = {
  setUserDataAC: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
  type: 'SET_USER_DATA', 
  data: {userId, email, login, isAuth}
  } as const),
  getCaptchaUrlSuccessAC: (url: string) => ({type: 'GET_CAPTCHA_URL_SUCCESS', payload: url} as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, rootActionType>;

export const setUserDataThunkCreator = (): ThunkType => {
  return async (dispatch) => {
    const data = await loginAPI.getLoginData();
    if (data.resultCode === ResultCodes.Success) {
      dispatch(actions.setUserDataAC(data.data.id, data.data.email, data.data.login, true));
    }
  }
}


export const loginThunkCreator = (email: string, password: string, rememberMe: boolean): ThunkType => {
  return async (dispatch) => {
    let data = await loginAPI.login(email, password, rememberMe);
    if(data.resultCode === ResultCodes.Success) {
      dispatch(setUserDataThunkCreator());
    } else if (data.resultCode === ResultCodes.CaptchaIsRequired) {
      dispatch(getCaptchaUrlThunkCreator());
    }
  }
}


export const logoutThunkCreator = (): ThunkType => {
  return async (dispatch) => {
    let data = await loginAPI.logout();
    if(data.resultCode === ResultCodes.Success) {
      dispatch(actions.setUserDataAC(null, null, null, false));
    }
  }
}


export const getCaptchaUrlThunkCreator = (): ThunkType => {
  return async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(actions.getCaptchaUrlSuccessAC(captchaUrl));
  }
}