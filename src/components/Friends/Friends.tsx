import classes from "./Friends.module.scss";
import emty_user from "../../assets/img/friends/empty-user.svg";
import { NavLink } from "react-router-dom";
import { Paginator } from "../Paginator/Paginator";
import { FriendsType } from "./FriendsTypes";
import { Searchbar } from "../Profile/Searchbar/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPage,
  getFilter,
  getFollowingInProgress,
  getFriends,
  getPageSize,
  getPortionSize,
  getTotalUserCount,
} from "./FriendsSelectors";
import {
  FilterType,
  getFollowingThunkCreator,
  getUnfollowingThunkCreator,
  requestUsers,
} from "../../data/friends-reducer";
import { useEffect } from "react";

export const Friends = (props: any) => {
  const friends = useSelector(getFriends);
  const totalUserCount = useSelector(getTotalUserCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getFilter);
  const followingInProgress = useSelector(getFollowingInProgress);
  const portionSize = useSelector(getPortionSize);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize, filter.term));
  }, [currentPage, dispatch, filter.term, pageSize]);

  const onPageChanged = (currentPage: number) => {
    dispatch(requestUsers(currentPage, pageSize, filter.term));
  };

  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(currentPage, pageSize, filter.term));
  };

  const follow = (userId: number) => {
    dispatch(getFollowingThunkCreator(userId));
  };

  const unfollow = (userId: number) => {
    dispatch(getUnfollowingThunkCreator(userId));
  };

  return (
    <div className={classes.friends}>
      <Searchbar onFilterChange={onFilterChanged} />
      <Paginator
        totalItemsCount={totalUserCount}
        pageSize={pageSize}
        portionSize={portionSize}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />
      {friends.map((f: FriendsType) => (
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
                    disabled={followingInProgress.some(
                      (id: number | string) => id === f.id
                    )}
                    onClick={() => {
                      unfollow(f.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={followingInProgress.some(
                      (id: number | string) => id === f.id
                    )}
                    onClick={() => {
                      follow(f.id);
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
