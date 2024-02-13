import clsx from "clsx";
import { Searchbar } from "../Profile/Searchbar/Searchbar";
import classes from "./Friends.module.scss";
import emty_user from "../../assets/img/friends/empty-user.svg";
import { FriendsTypes } from "./FriendsTypes";

export const Friends = (props: any) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize); // округляем в большую сторону
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={classes.friends}>
      <Searchbar />
      {pages.map((p: number) => {
        return (
          <span
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              props.onPageChanged(p);
            }}
            className={clsx(props.currentPage === p && classes.selectedPage)}
          >
            {p + "\n"}
          </span>
        );
      })}
      {props.friends.map((f: FriendsTypes) => (
        <div className={classes.friends_item}>
          <div className={classes.friends_item__content}>
            <div className={classes.friends_item__avatar}>
              <img
                src={f.photos.small != null ? f.photos.small : emty_user}
                alt="avatar"
              />
            </div>
            <div className={classes.friends_item__context}>
              <div className={classes.friends_item__name}>
                <h1>{f.name}</h1>
              </div>
              <div className={classes.friends_item__write}>
                {f.followed ? (
                  <button
                    onClick={() => {
                      props.toggleFollow(f.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.toggleFollow(f.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
