import { setUserDataThunkCreator } from "./auth-reducer";

const initialState = {
  initialized: false,
}

export const appReducer = (state = initialState, action: any) => {
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
export const setUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
  type: SET_USER_DATA, 
  data: {userId, email, login, isAuth}
});

const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";
export const getCaptchaUrlSuccessAC = (url: string) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: url})

const SET_INITIALIZED = "SET_INITIALIZED";
export const setInitializedAC = () => ({type: SET_INITIALIZED})


export const initializeAppThunkCreator = () => {
  return (dispatch: Function) => {
    let promise = dispatch(setUserDataThunkCreator());
    debugger;
    //? dispatch returns result of API function in axios.ts
    promise.then(() => {
      dispatch(setInitializedAC());
    });
  }
}