import React from "react";
import { Login } from "./Login";
import { connect } from "react-redux";
import { setUserDataThunkCreator } from "../../data/auth-reducer";
type myProps = {
  setUserDataThunk: Function;
};

export class LoginContainer extends React.Component<myProps> {
  componentDidMount(): void {
    this.props.setUserDataThunk();
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
  setUserDataThunk: () => {
    dispatch(setUserDataThunkCreator());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
