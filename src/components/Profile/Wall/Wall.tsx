import classes from "./Wall.module.scss";
import post from "../../../assets/img/post/post-post.svg";
import { Post } from "./Post/Post";

export const Wall = () => {
  let postData = [
    {
      id: 1,
      message:
        "What you need to do for this is very simple. Register and click the Become a Creator button. Making money is not far off. Come on, be a creator",
      likesCount: 11,
    },
  ];

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
      <Post text={postData[0].message} likesCount={postData[0].likesCount} />
    </div>
  );
};
