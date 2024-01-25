import { connect } from "react-redux";
import { Friends } from "./Friends";
import { setFriendsAC, toggleFollow } from "../../data/friends-reducer";

const mapStateToProps = (state: any) => {
  return {
    friends: state.friendsReducer.friends,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleFollow: (id: number) => {
      dispatch(toggleFollow(id));
    },
    setFriends: (friends: Array<any>) => {
      dispatch(setFriendsAC(friends));
    },
  };
};

export const FriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
