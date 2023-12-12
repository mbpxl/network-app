import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer"; 
import {messagesReducer} from "./messages-reducer";

let reducers = combineReducers({
    profileReducer,
    messagesReducer,
});

export const store = createStore(reducers);
