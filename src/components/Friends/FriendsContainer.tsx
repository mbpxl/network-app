import React from "react";
import { Friends } from "./Friends";
import { Preloader } from "../Preloader/Preloader";
import classes from "./Friends.module.scss";
import { friendsAPI } from "../../plugins/axios";
import { FriendsStateToPropsType } from "./FriendsTypes";
import {
  followUserAC,
  followingInProgressAC,
  setCurrentPageAC,
  setFriendsAC,
  setIsFetchingAC,
  setUsersTotalCount,
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
  setFriends: Function;
  totalUserCount: number;
  pageSize: number;
  currentPage: number;
  setCurrentPage: Function;
  setTotalUsersCount: Function;
  isFetching: boolean;
  toggleIsFetching: Function;
  followUser: Function;
  unfollowUser: Function;
  toggleFollowingInProgress: Function;
  followingInProgress: boolean;
};

class FriendsContainer extends React.Component<MyProps> {
  componentDidMount(): void {
    friendsAPI
      .getFriends(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setFriends(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    friendsAPI.getFriends(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setFriends(data.items);
    });
  };

  render() {
    return (
      <div>
        <div className={classes.friendsRender}></div>
        {this.props.isFetching ? <Preloader /> : null}
        <Friends
          onPageChanged={this.onPageChanged}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          friends={this.props.friends}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          followingInProgress={this.props.followingInProgress}
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
    setFriends: (friends: any) => {
      dispatch(setFriendsAC(friends));
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setUsersTotalCount(totalCount));
    },
    toggleIsFetching: (isFetching: boolean) => {
      dispatch(setIsFetchingAC(isFetching));
    },
    toggleFollowingInProgress: (isFollowing: boolean, userId: number) => {
      dispatch(followingInProgressAC(isFollowing, userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
