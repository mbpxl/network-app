import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
  getUserThunkCreator,
  setStatusThunkCreator,
  updateStatusThunkCreator,
} from "../../data/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../HOC/WithAuthRedirect";
import { compose } from "redux";

type MyProps = {
  profile: any;
  router: any;
  getUserThunk: Function;
  setStatusThunk: Function;
  updateStatusThunk: Function;
  isAuth: boolean;
  status: string;
};

class ProfileContainer extends React.Component<MyProps> {
  // store={props.store}
  componentDidMount(): void {
    let userId = this.props.router.params.userId;

    if (!userId) userId = 2;

    this.props.getUserThunk(userId);
    this.props.setStatusThunk(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatusThunk}
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
});

const mapDispatchToProps = (dispatch: any) => ({
  getUserThunk: (userId: number) => {
    dispatch(getUserThunkCreator(userId));
  },
  setStatusThunk: (userID: number) => {
    dispatch(setStatusThunkCreator(userID));
  },
  updateStatusThunk: (status: string) => {
    dispatch(updateStatusThunkCreator(status));
  },
});

//* let withUrlDataContainerComponent = withRouter(ProfileContainer);

function withRouter(Component: React.ComponentType<any>) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
