import classes from "./Wall.module.scss";
import post from "../../../assets/img/post/post-post.svg";
import { Post } from "./Post/Post";
import React, { useRef } from "react";

export const Wall = (props: any) => {
  let postData = props.posts; // using in map method in line 9

  let postElements = postData.map(
    (post: { message: String; likesCount: number }) => {
      return <Post text={post.message} likesCount={post.likesCount} />;
    }
  );

  const newPostElement = useRef<HTMLTextAreaElement>(null);

  const addPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current?.value;
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
          <button className="button" onClick={addPost}>
            Create Post
          </button>
        </div>
      </div>
      <div className={classes.wall__write}>
        <textarea
          ref={newPostElement}
          className={classes.wall__write_input}
          value={props.newPostText} // value from state.ts
          onChange={onPostChange}
        />
      </div>
      {postElements}
    </div>
  );
};
