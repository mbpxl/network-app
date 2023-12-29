import StoreContext from "../../../context/StoreContext";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../data/profile-reducer";
import { Wall } from "./Wall";

export const WallContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const onPostChange = (text: string) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
          <Wall
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={store.getState().profileReducer.posts}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
