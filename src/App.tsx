import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import classes from "./assets/Base.module.scss"; //! RESET&BASE SETTINGS (margin, padding, box-sizing etc)
import { Navigation } from "./components/Navigation/Navigation";
import { Messages } from "./components/Messages/Messages";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Searchbar } from "./components/Profile/Searchbar/Searchbar";
import LoginContainer from "./components/Login/LoginContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
//todo import { Friends } from "./components/Friends/Friends";

const App = (props: any) => {
  return (
    <BrowserRouter>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.Navigation}>
            <Navigation />
          </div>
          <div className={classes.Main}>
            <div className={classes.top}>
              <Searchbar />
              <LoginContainer />
            </div>

            <Routes>
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/profile" element={<ProfileContainer />} />
              <Route />
              <Route
                path="/messages/*"
                element={
                  <Messages
                    appState={props.state.messagesReducer} // appState={props.state.messagesReducer} dispatch={props.dispatch} store={props.store}
                  />
                }
              />
              {<Route path="/friends/*" element={<FriendsContainer />} />}
              <Route path="/login" element={<LoginContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
