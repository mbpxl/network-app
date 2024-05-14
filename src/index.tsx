import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./data/store-redux";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App
      state={store.getState()}
      //dispatch={store.dispatch.bind(store)}
      //store={store}
    />
  </Provider>
);

// rerenderEntireTree();
// store.subscribe(rerenderEntireTree);

reportWebVitals();
