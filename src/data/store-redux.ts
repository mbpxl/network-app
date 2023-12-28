//* Legacy way to use redux

import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import { messagesReducer } from "./messages-reducer";

const reducers = combineReducers({
    profileReducer,
    messagesReducer,
});

export const store = createStore(reducers); //! LEGACY SUKA
