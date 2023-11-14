import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { addPost, state } from "./data/state";
import { addPost } from "./data/state";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export let rerenderEntireTree = (state: any) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} />
    </React.StrictMode>
  );
};
