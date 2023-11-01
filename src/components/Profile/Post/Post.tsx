import classes from "./Post.module.scss";
import post from "../../../assets/img/post/post-post.svg";

export const Post = () => {
  return (
    <div className={classes.post}>
      <div className={classes.post__header}>
        <div className={classes.post__title}>
          <img src={post} alt="post" />
          <h1>POSTS</h1>
        </div>
        <div className={classes.post__create}>
          <form action="POST">
            <button type="submit" className="button">
              Create Post
            </button>
          </form>
        </div>
      </div>
      <div className={classes.post__content}>No posts yet...</div>
    </div>
  );
};
