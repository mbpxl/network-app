import classes from "./FriendsItem.module.scss";

export const FriendsItem = (props: any) => {
  return (
    <div className={classes.friends_item}>
      <div className={classes.friends_item__content}>
        <div className={classes.friends_item__avatar}>
          <img src={props.avatar} alt="avatar" />
        </div>
        <div className={classes.friends_item__context}>
          <div className={classes.friends_item__name}>
            <h1>{props.fullname}</h1>
          </div>
          <div className={classes.friends_item__write}>
            {props.followed ? (
              <button
                onClick={() => {
                  props.toggleFollow(props.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.toggleFollow(props.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
