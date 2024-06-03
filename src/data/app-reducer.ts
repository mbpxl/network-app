import { Dispatch } from "redux";
import { setUserDataThunkCreator } from "./auth-reducer";


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

type setInitializedType = {
  type: "SET_INITIALIZED";
}

type initialStateType = {
  initialized: boolean;
}

const initialState = {
  initialized: false,
}

type rootActionType = setUserDataType | getCaptchaUrlSuccessType | setInitializedType;

export const appReducer = (state: initialStateType = initialState, action: rootActionType): initialStateType => {
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

    case SET_INITIALIZED: {
      return {...state, initialized: true}
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

const SET_INITIALIZED = "SET_INITIALIZED";
export const setInitializedAC = (): setInitializedType => ({type: SET_INITIALIZED})


//? type initializeAppThunkCreatorType = ReturnType<typeof setUserDataThunkCreator> | ReturnType<typeof setInitializedAC>;
export const initializeAppThunkCreator = () => {
  return (dispatch: Dispatch<any>) => {
    let promise: Promise<void> = dispatch(setUserDataThunkCreator()) as unknown as Promise<void>;
    //* dispatch returns result of API function in axios.ts
    promise.then(() => {
      dispatch(setInitializedAC());
    });
  }
}