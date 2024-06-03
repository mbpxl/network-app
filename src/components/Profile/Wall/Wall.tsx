import React from "react";
import classes from "./Wall.module.scss";
import post from "../../../assets/img/post/post-post.svg";
import { Post } from "./Post/Post";
import { WallPropsType } from "../ProfileTypes";

export const Wall = (props: WallPropsType) => {
  let postData = props.posts; //? using in map() method

  let postElements = postData.map(
    (post: { message: String; likesCount: number }) => {
      return (
        <Post
          text={post.message}
          likesCount={post.likesCount}
          profile={props.profile}
        />
      );
    }
  );

  const onAddPost = () => {
    props.addPost(props.value);
  };

  const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(e.currentTarget?.value);
  };
  return (
    <div className={classes.wall}>
      <div className={classes.wall__header}>
        <div className={classes.wall__title}>
          <img src={post} alt="post" />
          <h1>POSTS</h1>
        </div>
        <div className={classes.wall__create}>
          <button className="button" onClick={onAddPost}>
            Create Post
          </button>
        </div>
      </div>
      <div className={classes.wall__write}>
        <textarea
          className={classes.wall__write_input}
          value={props.value} // value from state.ts
          onChange={onPostChange}
        />
      </div>
      {postElements}
    </div>
  );
};
