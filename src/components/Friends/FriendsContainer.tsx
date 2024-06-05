import React from "react";
import { Friends } from "./Friends";
import { Preloader } from "../Preloader/Preloader";
import classes from "./Friends.module.scss";
import {
  FilterType,
  actions,
  getFollowingThunkCreator,
  getUnfollowingThunkCreator,
  requestUsers,
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
  filter: FilterType;
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
    this.props.requestUsersThunk(
      1,
      this.props.pageSize,
      this.props.filter.term
    );
  };

  onFilterChanged = (filter: FilterType) => {
    this.props.requestUsersThunk(
      this.props.currentPage,
      this.props.pageSize,
      filter.term
    );
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
          onFilterChanged={this.onFilterChanged}
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
    filter: state.friendsReducer.filter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): MapDispatchPropsType => {
  return {
    setCurrentPage: (pageNumber: number) => {
      dispatch(actions.setCurrentPageAC(pageNumber));
    },
    requestUsersThunk: (
      currentPage: number,
      pageSize: number,
      term: string
    ) => {
      dispatch(requestUsers(currentPage, pageSize, term));
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
