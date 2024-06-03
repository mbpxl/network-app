import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  getUserThunkCreator,
  setStatusThunkCreator,
  updateNewPostTextActionCreator,
  updatePhotoThunkCreator,
  updateProfileThunkCreator,
  updateStatusThunkCreator,
} from "../../data/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../HOC/WithAuthRedirect";
import { compose } from "redux";
import { AppStateType } from "../../data/store-redux";
import { ProfileType } from "./ProfileTypes";

type MyProps = {
  profile: ProfileType;
  router: any;
  getUserThunk: (userId: number) => void;
  setStatusThunk: (userID: number) => void;
  updateStatusThunk: (status: string) => void;
  isAuth: boolean;
  status: string;
  updatePhoto: (photo: File) => void;
  updateProfile: (fullName: string) => void;
  updateNewPostText: Function;
  addPost: (text: string) => void;
  posts: Array<{ id: number; message: string; likesCount: number }>;
  startPostValue: string;
};

class ProfileContainer extends React.Component<MyProps> {
  refreshProfile(): void {
    let userId = this.props.router.params.userId;

    if (!userId) {
      userId = 2;
    }

    this.props.getUserThunk(userId);
    this.props.setStatusThunk(userId);
  }

  componentDidMount(): void {
    this.refreshProfile();
  }

  componentDidUpdate(
    prevProps: Readonly<MyProps>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    if (this.props.profile !== null) {
      return (
        <Profile
          isOwner={!this.props.router.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatusThunk}
          updatePhoto={this.props.updatePhoto}
          updateProfile={this.props.updateProfile}
          posts={this.props.posts}
          updateNewPostText={this.props.updateNewPostText}
          addPost={this.props.addPost}
          startPostValue={this.props.startPostValue}
        />
      );
    }
  }
}
const mapStateToProps = (state: AppStateType) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  posts: state.profileReducer.posts,
  startPostValue: state.profileReducer.tempPostText,
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
  updatePhoto: (photo: File) => {
    dispatch(updatePhotoThunkCreator(photo));
  },
  updateProfile: (fullName: string) => {
    dispatch(updateProfileThunkCreator(fullName));
  },
  updateNewPostText: (text: string) => {
    dispatch(updateNewPostTextActionCreator(text));
  },
  addPost: (text: string) => {
    dispatch(addPostActionCreator(text));
  },
});

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
