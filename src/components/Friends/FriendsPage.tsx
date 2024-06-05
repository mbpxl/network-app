import React from "react";
import { Friends } from "./Friends";
import { Preloader } from "../Preloader/Preloader";
import classes from "./Friends.module.scss";
import { useSelector } from "react-redux";
import { getIsFetching } from "./FriendsSelectors";

type FriendsPagePropsType = {};

export const FriendsPage = (props: FriendsPagePropsType) => {
  const isFetching = useSelector(getIsFetching);

  return (
    <div className={classes.friendsMain}>
      <div className={classes.friendsLoader}>
        {isFetching ? <Preloader /> : null}
      </div>
      <Friends />
    </div>
  );
};
