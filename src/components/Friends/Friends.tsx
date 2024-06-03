import classes from "./Friends.module.scss";
import emty_user from "../../assets/img/friends/empty-user.svg";
import { NavLink } from "react-router-dom";
import { Paginator } from "../Paginator/Paginator";
import { FriendsPropsTypes, FriendsType } from "./FriendsTypes";

export const Friends = (props: FriendsPropsTypes) => {
  return (
    <div className={classes.friends}>
      <Paginator
        totalItemsCount={props.totalItemsCount}
        pageSize={props.pageSize}
        portionSize={props.portionSize}
        onPageChanged={props.onPageChanged}
        currentPage={props.currentPage}
      />
      {props.friends.map((f: FriendsType) => (
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
                      (id: number | string) => id === f.id
                    )}
                    onClick={() => {
                      props.getUnfollowingThunk(f.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id: number | string) => id === f.id
                    )}
                    onClick={() => {
                      props.getFollowingThunk(f.id);
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
