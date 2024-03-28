import classes from "./Post.module.scss";
import more from "../../../../assets/img/post/post-more.svg";
import like from "../../../../assets/img/post/post-like.svg";
import empty_user from "../../../../assets/img/friends/empty-user.svg";

type propsType = {
  text: String;
  likesCount: number;
  profile: any;
};

export const Post = (props: propsType) => {
  return (
    <div className={classes.post}>
      <div className={classes.post__header}>
        <div className={classes.post__author}>
          <img
            src={
              props.profile.photos.small != null
                ? props.profile.photos.small
                : empty_user
            }
            alt="autor"
          />
        </div>
        <div className={classes.post__text}>{props.text}</div>
        <div className={classes.post__more}>
          <button type="submit" className={classes.post__more_btn}>
            <img src={more} alt="more" />
          </button>
        </div>
      </div>
      <div className={classes.post__content}>
        {/* <img src={content} alt="content" /> */}
      </div>
      <div className={classes.post__actions}>
        <button type="submit" className="button">
          <img src={like} alt="like" />
        </button>
        <h6>{props.likesCount} Likes</h6>
      </div>
    </div>
  );
};
