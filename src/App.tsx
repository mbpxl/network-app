import { BrowserRouter, Route, Routes } from "react-router-dom";
import classes from "./assets/Base.module.scss"; //! RESET&BASE SETTINGS (margin, padding, box-sizing etc)
import { Navigation } from "./components/Navigation/Navigation";
import { Profile } from "./components/Profile/Profile";
import { Messages } from "./components/Messages/Messages";
import { Friends } from "./components/Friends/Friends";

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
                element={
                  <Profile
                    appState={props.state.profilePage}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                  />
                }
              />
              <Route
                path="/messages/*"
                element={
                  <Messages
                    appState={props.state.messagesPage}
                    addMessage={props.addMessage}
                    updateNewMessageText={props.updateNewMessageText}
                  />
                }
              />
              <Route
                path="/friends/*"
                element={<Friends appState={props.state.friendsPage} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
