import { AppStateType } from "../../data/store-redux";

export const getIsAuth = (state: AppStateType) => {
  return state.authReducer.isAuth; 
}

export const getCaptchaUrl = (state: AppStateType) => {
  return state.authReducer.captchaUrl; 
}