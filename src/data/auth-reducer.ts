import { loginAPI, securityAPI } from "../plugins/axios";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null,
}

export const authReducer = (state = initialState, action: any) => {
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
export const setUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
  type: SET_USER_DATA, 
  data: {userId, email, login, isAuth}
});

const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";
export const getCaptchaUrlSuccessAC = (url: string) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: url})

export const setUserDataThunkCreator = () => {
  return (dispatch: Function) => {
    loginAPI.getLoginData().then( (data) => {
      if (data.resultCode === 0) {
        dispatch(setUserDataAC(data.data.id, data.data.email, data.data.login, true));
      }
    });
  }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => {
  return (dispatch: Function) => {
    loginAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserDataThunkCreator())
      } else if (data.resultCode === 10) {
        dispatch(getCaptchaUrlThunkCreator());
      }
    })
  }
}

export const logoutThunkCreator = () => {
  return (dispatch: Function) => {
    loginAPI.logout().then((data) => {
      if(data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false));
      }
    })
  }
}

export const getCaptchaUrlThunkCreator = () => {
  return async (dispatch: Function) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccessAC(captchaUrl));
  }
}