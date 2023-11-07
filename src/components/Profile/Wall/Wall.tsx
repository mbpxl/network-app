import classes from "./Wall.module.scss";
import post from "../../../assets/img/post/post-post.svg";
import { Post } from "./Post/Post";

export const Wall = (props: any) => {
  let postData = props.posts;

  let postElements = postData.map(
    (post: { message: String; likesCount: number }) => {
      return <Post text={post.message} likesCount={post.likesCount} />;
    }
  );

  return (
    <div className={classes.wall}>
      <div className={classes.wall__header}>
        <div className={classes.wall__title}>
          <img src={post} alt="post" />
          <h1>POSTS</h1>
        </div>
        <div className={classes.wall__create}>
          <form action="POST">
            <button type="submit" className="button">
              Create Post
            </button>
          </form>
        </div>
      </div>
      {postElements}
    </div>
  );
};
