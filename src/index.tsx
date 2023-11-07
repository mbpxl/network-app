import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let postData = [
  {
    id: 1,
    message:
      "What you need to do for this is very simple. Register and click the Become a Creator button. Making money is not far off. Come on, be a creator",
    likesCount: 11,
  },
  {
    id: 2,
    message: "Hello World!!!",
    likesCount: 18,
  },
];

let contactsData = [
  {
    id: 1,
    name: "Faraz Tariq",
    lastMessage: "see you in friday",
    avatar: "",
  },
  {
    id: 2,
    name: "Ilya",
    lastMessage: "ok",
    avatar: "",
  },
  {
    id: 3,
    name: "Gena",
    lastMessage: "never mind",
    avatar: "",
  },
  {
    id: 4,
    name: "Masha",
    lastMessage: "what?",
    avatar: "",
  },
  {
    id: 5,
    name: "Kim",
    lastMessage: "hi",
    avatar: "",
  },
  {
    id: 6,
    name: "Alina",
    lastMessage: "later",
    avatar: "",
  },
];

let dialogData = [
  { id: 1, message: "Hop" },
  { id: 2, message: "Hey" },
  { id: 3, message: "La-la-ley" },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <App posts={postData} contacts={contactsData} dialogs={dialogData} />
);

reportWebVitals();
