import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { getUserThunkCreator } from "../../data/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

type MyProps = {
  profile: any;
  router: any;
  getUserThunk: Function;
};

class ProfileContainer extends React.Component<MyProps> {
  // store={props.store}
  componentDidMount(): void {
    let userId = this.props.router.params.userId;

    if (!userId) userId = 2;

    this.props.getUserThunk(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state: any) => ({
  profile: state.profileReducer.profile,
});

const mapDispatchToProps = (dispatch: any) => ({
  getUserThunk: (userId: number) => {
    dispatch(getUserThunkCreator(userId));
  },
});

//* let withUrlDataContainerComponent = withRouter(ProfileContainer);

function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileContainer));
