import classes from "./FriendsItem.module.scss";

export const FriendsItem = (props: any) => {
  return (
    <div className={classes.friends_item}>
      <div className={classes.friends_item__content}>
        <div className={classes.friends_item__avatar}>
          <img src={props.avatar} alt="ava" />
        </div>
        <div className={classes.friends_item__context}>
          <div className={classes.friends_item__name}>
            <h1>{props.name}</h1>
          </div>
          <div className={classes.friends_item__write}>
            <button>Write message</button>
          </div>
        </div>
      </div>
    </div>
  );
};
