import React from "react";
import classes from "./Wall.module.scss";
import empty_user from "../../../assets/img/friends/empty-user.svg";
import post from "../../../assets/img/post/post-post.svg";
import { Post } from "./Post/Post";
import { useRef } from "react";

export const Wall = (props: any) => {
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
    props.addPost();
  };

  let inputRef = useRef<HTMLTextAreaElement>(null);
  const onPostChange = () => {
    let text = inputRef.current?.value;
    props.updateNewPostText(text);
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
          ref={inputRef}
          value={props.newPostText} // value from state.ts
          onChange={onPostChange}
        />
      </div>
      {postElements}
    </div>
  );
};
