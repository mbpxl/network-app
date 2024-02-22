import React from "react";
import { Profile } from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfileAC } from "../../data/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

type MyProps = {
  setUserProfile: Function;
  setTotalUsersCount: Function;
  currentPage: number;
  pageSize: number;
  profile: any;
  router: any;
};

class ProfileContainer extends React.Component<MyProps> {
  // store={props.store}
  componentDidMount(): void {
    let userId = this.props.router.params.userId;

    if (!userId) userId = 2;

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    console.log(this.props.profile);
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state: any) => ({
  profile: state.profileReducer.profile,
});

const mapDispatchToProps = (dispatch: any) => ({
  setUserProfile: (profile: any) => {
    dispatch(setUserProfileAC(profile));
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
