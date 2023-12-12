import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./data/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
};
rerenderEntireTree();
store.subscribe(rerenderEntireTree);

reportWebVitals();
