import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./data/state";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </React.StrictMode>
  );
};

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

reportWebVitals();
