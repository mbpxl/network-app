import { connect } from "react-redux";
import { FriendsApiComponent } from "./FriendsApiComponent";
import {
  followUserAC,
  setCurrentPageAC,
  setFriendsAC,
  setIsFetchingAC,
  setUsersTotalCount,
  toggleFollow,
  unfollowUserAC,
} from "../../data/friends-reducer";

const mapStateToProps = (state: any) => {
  return {
    friends: state.friendsReducer.friends,
    pageSize: state.friendsReducer.pageSize,
    totalUserCount: state.friendsReducer.totalUserCount,
    currentPage: state.friendsReducer.currentPage,
    isFetching: state.friendsReducer.isFetching,
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
    toggleFollow: (id: number) => {
      dispatch(toggleFollow(id));
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
  };
};

export const FriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsApiComponent);
