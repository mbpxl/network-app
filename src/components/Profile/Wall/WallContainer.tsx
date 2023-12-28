import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../data/profile-reducer";
import { Wall } from "./Wall";

export const WallContainer = (props: any) => {
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text: string) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <Wall
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={props.store.getState().profileReducer.posts}
    />
  );
};
