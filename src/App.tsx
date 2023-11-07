import { BrowserRouter, Route, Routes } from "react-router-dom";
import classes from "./assets/Base.module.scss"; //! RESET&BASE SETTINGS (margin, padding, box-sizing etc)
import { Navigation } from "./components/Navigation/Navigation";
import { Profile } from "./components/Profile/Profile";
import { Messages } from "./components/Messages/Messages";

const App = (props: any) => {
  return (
    <BrowserRouter>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.Navigation}>
            <Navigation />
          </div>
          <div className={classes.Main}>
            <Routes>
              <Route
                path="/profile"
                element={<Profile posts={props.posts} />}
              />
              <Route
                path="/messages/*"
                element={
                  <Messages contacts={props.contacts} dialogs={props.dialogs} />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
