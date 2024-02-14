import { connect } from "react-redux";
import { FriendsApiComponent } from "./FriendsApiComponent";
import {
  setCurrentPageAC,
  setFriendsAC,
  setIsFetchingAC,
  setUsersTotalCount,
  toggleFollow,
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

const mapDispatchToProps = (dispatch: any) => {
  return {
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
