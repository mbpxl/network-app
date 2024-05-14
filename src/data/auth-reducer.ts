import { Dispatch } from "redux";
import { loginAPI, securityAPI } from "../plugins/axios";



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

export const authReducer = (state: initialStateType = initialState, action: rootActionType) => {
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


type setUserDataThunkCreatorType = ReturnType<typeof setUserDataAC>;
export const setUserDataThunkCreator = () => {
  return async (dispatch: Dispatch<setUserDataThunkCreatorType>) => {
    const data = await loginAPI.getLoginData();
    if (data.resultCode === 0) {
      dispatch(setUserDataAC(data.data.id, data.data.email, data.data.login, true));
    }
  }
}


//? type loginThunkCreatorType = ReturnType<typeof setUserDataThunkCreator> | ReturnType<typeof getCaptchaUrlThunkCreator>;
export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => {
  return (dispatch: Dispatch<any>) => {
    loginAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserDataThunkCreator())
      } else if (data.resultCode === 10) {
        dispatch(getCaptchaUrlThunkCreator());
      }
    })
  }
}


type loginThunkCreatorTypeType = ReturnType<typeof setUserDataAC>;
export const logoutThunkCreator = () => {
  return (dispatch: Dispatch<loginThunkCreatorTypeType>) => {
    loginAPI.logout().then((data) => {
      if(data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false));
      }
    })
  }
}


type getCaptchaUrlThunkCreatorType = ReturnType<typeof getCaptchaUrlSuccessAC>;
export const getCaptchaUrlThunkCreator = () => {
  return async (dispatch: Dispatch<getCaptchaUrlThunkCreatorType>) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccessAC(captchaUrl));
  }
}