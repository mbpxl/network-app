import reportWebVitals from "./reportWebVitals";
import { rerenderEntireTree } from "./render";
import { state } from "./data/state";

rerenderEntireTree(state);

reportWebVitals();
