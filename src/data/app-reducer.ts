import { setUserDataThunkCreator } from "./auth-reducer";
import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "./store-redux";


type initialStateType = {
  initialized: boolean;
}

type PayloadType = {
  payload: {
    url: string;
  }
}

const initialState = {
  initialized: false,
}

type rootActionType = InferActionsTypes<typeof actions>;

export const appReducer = (state: initialStateType = initialState, action: rootActionType): initialStateType => {
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

    case 'SET_INITIALIZED': {
      return {...state, initialized: true}
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
  setInitializedAC: () => ({type: 'SET_INITIALIZED'} as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, rootActionType>;

export const initializeAppThunkCreator = (): ThunkType => {
  return async (dispatch) => {
    let promise: Promise<void> = dispatch(setUserDataThunkCreator()) as unknown as Promise<void>;
    promise.then(() => {
      dispatch(actions.setInitializedAC());
    });
  }
}