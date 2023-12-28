import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./data/store-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const rerenderEntireTree = () => {
  root.render(
    <App
      state={store.getState()}
      dispatch={store.dispatch.bind(store)}
      store={store}
    />
  );
};
rerenderEntireTree();
store.subscribe(rerenderEntireTree);

reportWebVitals();
