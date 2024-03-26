//* Legacy way to use redux
//todo: addTask: (taskTitle: string) => void,

import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import { messagesReducer } from "./messages-reducer";
import { friendsReducer } from "./friends-reducer";
import { authReducer } from "./auth-reducer";
import { appReducer } from "./app-reducer";
import {thunk} from "redux-thunk";
const reducers = combineReducers({
    profileReducer,
    messagesReducer,
    friendsReducer,
    authReducer,
    appReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk)); //! LEGACY SUKA
