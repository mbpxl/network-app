import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./data/store-redux";
import StoreContext from "./context/StoreContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const rerenderEntireTree = () => {
  root.render(
    <StoreContext.Provider value={store}>
      <App
        state={store.getState()}
        //dispatch={store.dispatch.bind(store)}
        //store={store}
      />
    </StoreContext.Provider>
  );
};
rerenderEntireTree();
store.subscribe(rerenderEntireTree);

reportWebVitals();
