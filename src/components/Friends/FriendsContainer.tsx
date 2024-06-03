import React from "react";
import { Friends } from "./Friends";
import { Preloader } from "../Preloader/Preloader";
import classes from "./Friends.module.scss";
import {
  getFollowingThunkCreator,
  getUnfollowingThunkCreator,
  requestUsers,
  setCurrentPageAC,
} from "../../data/friends-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../data/store-redux";
import { Dispatch } from "redux";
import { FriendsType } from "./FriendsTypes";

type MapStatePropsType = {
  friends: Array<FriendsType>;
  totalUserCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
  portionSize: number;
  followingInProgress: any[];
};

type MapDispatchPropsType = {
  setCurrentPage: (page: number) => void;
  requestUsersThunk: (page: number, pageSize: number, term: string) => void;
  getFollowingThunk: (userId: number) => void;
  getUnfollowingThunk: (userId: number) => void;
};

type MyProps = MapStatePropsType & MapDispatchPropsType; //!

class FriendsContainer extends React.Component<MyProps> {
  componentDidMount(): void {
    this.props.requestUsersThunk(
      this.props.currentPage,
      this.props.pageSize,
      ""
    );
  }

  onPageChanged = (pageNumber: number): void => {
    this.props.requestUsersThunk(pageNumber, this.props.pageSize, "");
  };

  render() {
    return (
      <div className={classes.friendsMain}>
        <div className={classes.friendsLoader}>
          {this.props.isFetching ? <Preloader /> : null}
        </div>
        <Friends
          onPageChanged={this.onPageChanged}
          totalItemsCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          friends={this.props.friends}
          followingInProgress={this.props.followingInProgress}
          getFollowingThunk={this.props.getFollowingThunk}
          getUnfollowingThunk={this.props.getUnfollowingThunk}
          portionSize={this.props.portionSize}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
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

const mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchPropsType => {
  return {
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    requestUsersThunk: (
      currentPage: number,
      pageSize: number,
      term: string
    ) => {
      dispatch(requestUsers(currentPage, pageSize));
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
