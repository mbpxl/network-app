import { connect } from "react-redux";
import { FriendsApiComponent } from "./FriendsApiComponent";
import {
  setCurrentPageAC,
  setFriendsAC,
  setUsersTotalCount,
  toggleFollow,
} from "../../data/friends-reducer";

const mapStateToProps = (state: any) => {
  return {
    friends: state.friendsReducer.friends,
    pageSize: state.friendsReducer.pageSize,
    totalUserCount: state.friendsReducer.totalUserCount,
    currentPage: state.friendsReducer.currentPage,
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
  };
};

export const FriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsApiComponent);
