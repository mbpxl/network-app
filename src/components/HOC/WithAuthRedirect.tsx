import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};

export const withAuthRedirect: any = (Component: React.ComponentType<any>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const RedirectComponent = (props: any) => {
    if (!props.isAuth) return <Navigate to={"/login"} />;
    return <Component {...props} />;
  };

  let ConnectedAuthRedicrectComponent =
    connect(mapStateToProps)(RedirectComponent);
  return ConnectedAuthRedicrectComponent;
};
