import React from "react";
import { Login } from "./Login";
import { connect } from "react-redux";
import {
  loginThunkCreator,
  setUserDataThunkCreator,
} from "../../data/auth-reducer";
import { AppStateType } from "../../data/store-redux";
import { Dispatch } from "redux";
type myProps = {
  setUserDataThunk: () => void;
  loginThunk: (email: string, password: string, rememberMe: boolean) => void;
  isAuth: boolean;
  captchaUrl: string | null;
  login: string | null;
};

export class LoginContainer extends React.Component<myProps> {
  render() {
    return (
      <Login
        login={this.props.loginThunk}
        isAuth={this.props.isAuth}
        captchaUrl={this.props.captchaUrl}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  captchaUrl: state.authReducer.captchaUrl,
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
});
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  setUserDataThunk: () => {
    dispatch(setUserDataThunkCreator());
  },
  loginThunk: (email: string, password: string, rememberMe: boolean) => {
    dispatch(loginThunkCreator(email, password, rememberMe));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
