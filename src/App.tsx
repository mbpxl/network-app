import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import classes from "./assets/Base.module.scss"; //! RESET&BASE SETTINGS (margin, padding, box-sizing etc)
import Navigation from "./components/Navigation/Navigation";
import { Messages } from "./components/Messages/Messages";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Searchbar } from "./components/Profile/Searchbar/Searchbar";
import LoginContainer from "./components/Login/LoginContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import { connect } from "react-redux";
import { initializeAppThunkCreator } from "./data/app-reducer";
import { Preloader } from "./components/Preloader/Preloader";
import { typesApp } from "./types-app";

const App = (props: any) => {
  console.log(props);
  useEffect(() => {
    props.initializeApp();
  });

  if (!props.initialized) {
    return <Preloader />;
  }
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

const mapStateToProps = (state: any) => ({
  initialized: state.appReducer.initialized,
});

const mapDispatchToProps = (dispatch: Function) => ({
  initializeApp: () => {
    dispatch(initializeAppThunkCreator());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
