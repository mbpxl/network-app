import React from "react";
import { Friends } from "./Friends";
import { Preloader } from "../Preloader/Preloader";
import classes from "./Friends.module.scss";
import { FriendsStateToPropsType } from "./FriendsTypes";
import {
  followUserAC,
  followingInProgressAC,
  getFollowingThunkCreator,
  getFriendsThunkCreator,
  getUnfollowingThunkCreator,
  setCurrentPageAC,
  unfollowUserAC,
} from "../../data/friends-reducer";
import { connect } from "react-redux";

type MyProps = {
  friends: Array<{
    name: string;
    id: number;
    photos: { small: null | string; large: null | string };
    status: null | string;
    followed: boolean;
  }>;
  totalUserCount: number;
  pageSize: number;
  currentPage: number;
  setCurrentPage: Function;
  isFetching: boolean;
  followUser: Function;
  unfollowUser: Function;
  toggleFollowingInProgress: Function;
  followingInProgress: boolean;
  getFriendsThunk: Function;
  getFollowingThunk: Function;
  getUnfollowingThunk: Function;
  portionSize: number;
};

class FriendsContainer extends React.Component<MyProps> {
  componentDidMount(): void {
    this.props.getFriendsThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getFriendsThunk(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <div className={classes.friendsMain}>
        {/* <div className={classes.friendsRender}></div> */}
        <div className={classes.friendsLoader}>
          {this.props.isFetching ? <Preloader /> : null}
        </div>
        <Friends
          onPageChanged={this.onPageChanged}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
          totalItemsCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          friends={this.props.friends}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          followingInProgress={this.props.followingInProgress}
          getFollowingThunk={this.props.getFollowingThunk}
          getUnfollowingThunk={this.props.getUnfollowingThunk}
          portionSize={this.props.portionSize}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: FriendsStateToPropsType) => {
  return {
    friends: state.friendsReducer.friends,
    pageSize: state.friendsReducer.pageSize,
    totalUserCount: state.friendsReducer.totalUserCount,
    currentPage: state.friendsReducer.currentPage,
    isFetching: state.friendsReducer.isFetching,
    followingInProgress: state.friendsReducer.followingInProgress,
    portionSize: state.friendsReducer.portionSize,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    followUser: (id: number) => {
      dispatch(followUserAC(id));
    },
    unfollowUser: (id: number) => {
      dispatch(unfollowUserAC(id));
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    toggleFollowingInProgress: (isFollowing: boolean, userId: number) => {
      dispatch(followingInProgressAC(isFollowing, userId));
    },
    getFriendsThunk: (currentPage: number, pageSize: number) => {
      dispatch(getFriendsThunkCreator(currentPage, pageSize));
    },
    getFollowingThunk: (userId: number) => {
      dispatch(getFollowingThunkCreator(userId));
    },
    getUnfollowingThunk: (userId: number) => {
      dispatch(getUnfollowingThunkCreator(userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
