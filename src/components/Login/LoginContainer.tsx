import React from "react";
import { Login } from "./Login";
import { connect } from "react-redux";
import {
  loginThunkCreator,
  setUserDataThunkCreator,
} from "../../data/auth-reducer";
type myProps = {
  setUserDataThunk: Function;
  loginThunk: Function;
  isAuth: boolean;
};

export class LoginContainer extends React.Component<myProps> {
  componentDidMount(): void {
    this.props.setUserDataThunk();
  }

  render() {
    return <Login login={this.props.loginThunk} isAuth={this.props.isAuth} />;
  }
}

const mapStateToProps = (state: {
  authReducer: { isAuth: boolean; login: string };
}) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
});

const mapDispatchToProps = (dispatch: Function) => ({
  setUserDataThunk: () => {
    dispatch(setUserDataThunkCreator());
  },
  loginThunk: (email: string, password: string, rememberMe: boolean) => {
    dispatch(loginThunkCreator(email, password, rememberMe));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
