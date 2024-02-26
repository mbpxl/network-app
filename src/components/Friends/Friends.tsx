import clsx from "clsx";
import classes from "./Friends.module.scss";
import emty_user from "../../assets/img/friends/empty-user.svg";
import { FriendsTypes } from "./FriendsTypes";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const Friends = (props: any) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize); // округляем в большую сторону
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.friends}>
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
              <NavLink to={"/profile/" + f.id}>
                <img
                  src={f.photos.small != null ? f.photos.small : emty_user}
                  alt="avatar"
                />
              </NavLink>
            </div>
            <div className={classes.friends_item__context}>
              <div className={classes.friends_item__name}>
                <h1>{f.name}</h1>
              </div>
              <div className={classes.friends_item__write}>
                {f.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id: number) => id === f.id
                    )}
                    onClick={() => {
                      console.log("DELETE request activate");
                      props.toggleFollowingInProgress(true, f.id);
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${f.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "35c71cbe-056d-4f3a-8b86-227cea546bb3",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollowUser(f.id);
                          }
                          props.toggleFollowingInProgress(false, f.id);
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress}
                    onClick={() => {
                      console.log("POST request activate");
                      props.toggleFollowingInProgress(true, f.id);
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${f.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "35c71cbe-056d-4f3a-8b86-227cea546bb3",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.followUser(f.id);
                          }
                          props.toggleFollowingInProgress(false, f.id);
                        });
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
