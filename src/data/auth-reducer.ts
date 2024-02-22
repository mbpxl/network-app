import { authTypes } from "./types";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
}

export const authReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    }

    default: {
      return state;
    }
  }
}

const SET_USER_DATA = "SET_USER_DATA";
export const setUserDataAC = (userId: authTypes, email: authTypes, login: authTypes) => ({
  type: SET_USER_DATA, 
  data: {userId, email, login}
});