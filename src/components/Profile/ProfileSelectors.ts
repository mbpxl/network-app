import { AppStateType } from "../../data/store-redux";

export const getProfile = (state: AppStateType) => {
  return state.profileReducer.profile;
}

export const getStatus = (state: AppStateType) => {
  return state.profileReducer.status;
}

export const getPosts = (state: AppStateType) => {
  return state.profileReducer.posts;
}

export const getStartPostValue = (state: AppStateType) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  state.profileReducer.tempPostText;
}