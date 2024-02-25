import React from "react";
import { Login } from "./Login";
import axios from "axios";
import { connect } from "react-redux";
import { setUserDataAC } from "../../data/auth-reducer";
import { loginAPI } from "../../plugins/axios";
type myProps = {
  setUserData: Function;
};

export class LoginContainer extends React.Component<myProps> {
  componentDidMount(): void {
    loginAPI.getLoginData().then((data) => {
      if (data.resultCode === 0) {
        //debugger;
        this.props.setUserData(data.data.id, data.data.email, data.data.login);
      }
    });
  }

  render() {
    return <Login {...this.props} />;
  }
}

const mapStateToProps = (state: {
  authReducer: { isAuth: boolean; login: string };
}) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
});

const mapDispatchToProps = (dispatch: any) => ({
  setUserData: (data: any) => {
    dispatch(setUserDataAC(data.userId, data.email, data.login));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
