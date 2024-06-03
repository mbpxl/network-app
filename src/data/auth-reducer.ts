import { loginAPI, securityAPI } from "../plugins/axios";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./store-redux";
import { ResultCodes } from "../plugins/axiosTypes";



type setUserDataType = {
  type: "SET_USER_DATA";
  data: {
    userId: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
  }
}

type getCaptchaUrlSuccessType = {
  type: "GET_CAPTCHA_URL_SUCCESS";
  payload: {};
}

type initialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isFetching: boolean;
  isAuth: boolean;
  captchaUrl: string | null;
}

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null,
}

type rootActionType = setUserDataType | getCaptchaUrlSuccessType;

export const authReducer = (state: initialStateType = initialState, action: rootActionType): initialStateType => {
  switch(action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      }
    }

    case GET_CAPTCHA_URL_SUCCESS: {
      return {...state, ...action.payload}
    }

    default: {
      return state;
    }
  }
}

const SET_USER_DATA = "SET_USER_DATA";
export const setUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setUserDataType => ({
  type: SET_USER_DATA, 
  data: {userId, email, login, isAuth}
});

const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";
export const getCaptchaUrlSuccessAC = (url: string): getCaptchaUrlSuccessType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: url})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, rootActionType>;

export const setUserDataThunkCreator = (): ThunkType => {
  return async (dispatch) => {
    const data = await loginAPI.getLoginData();
    if (data.resultCode === ResultCodes.Success) {
      dispatch(setUserDataAC(data.data.id, data.data.email, data.data.login, true));
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
      dispatch(setUserDataAC(null, null, null, false));
    }
  }
}


export const getCaptchaUrlThunkCreator = (): ThunkType => {
  return async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccessAC(captchaUrl));
  }
}