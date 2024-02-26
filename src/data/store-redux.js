//* Legacy way to use redux

import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import { messagesReducer } from "./messages-reducer";
import { friendsReducer } from "./friends-reducer";
import { authReducer } from "./auth-reducer";
import {thunk} from "redux-thunk";
const reducers = combineReducers({
    profileReducer,
    messagesReducer,
    friendsReducer,
    authReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk)); //! LEGACY SUKA
