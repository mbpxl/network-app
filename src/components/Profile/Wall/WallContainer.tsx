import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../data/profile-reducer";
import { Wall } from "./Wall";

const mapStateToProps = (state: any) => {
  return {
    posts: state.profileReducer.posts,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateNewPostText: (text: string) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

export const WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall);
