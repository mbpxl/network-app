import classes from "./Post.module.scss";
import post from "../../../assets/img/post/post-post.svg";
import author from "../../../assets/img/post/post-autor.png";
import more from "../../../assets/img/post/post-more.svg";
import content from "../../../assets/img/post/post-img.jpg";
import like from "../../../assets/img/post/post-like.svg";

export const Post = () => {
  return (
    <div className={classes.page}>
      <div className={classes.page__header}>
        <div className={classes.page__title}>
          <img src={post} alt="post" />
          <h1>POSTS</h1>
        </div>
        <div className={classes.page__create}>
          <form action="POST">
            <button type="submit" className="button">
              Create Post
            </button>
          </form>
        </div>
      </div>
      <div className={classes.post}>
        <div className={classes.post__header}>
          <div className={classes.post__author}>
            <img src={author} alt="autor" />
          </div>
          <div className={classes.post__text}>
            What you need to do for this is very simple. Register and click the
            Become a Creator button. Making money is not far off. Come on, be a
            creator.
          </div>
          <div className={classes.post__more}>
            <button type="submit" className={classes.post__more_btn}>
              <img src={more} alt="more" />
            </button>
          </div>
        </div>
        <div className={classes.post__content}>
          <img src={content} alt="content" />
        </div>
        <div className={classes.post__actions}>
          <button type="submit" className="button">
            <img src={like} alt="like" />
          </button>
          <h6>34 likes</h6>
        </div>
      </div>
    </div>
  );
};
