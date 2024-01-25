import React from "react";
import { Searchbar } from "../Profile/Searchbar/Searchbar";
import classes from "./Friends.module.scss";
import { FriendsItem } from "./FriendsItem/FriendsItem";

export const Friends = (props: any) => {
  const friendsData = props.friends;

  const friendsItemElements = friendsData.map(
    (f: {
      fullname: string;
      avatar: string;
      id: number | string;
      followed: boolean;
    }) => {
      return (
        <FriendsItem
          id={f.id}
          followed={f.followed}
          avatar={f.avatar}
          fullname={f.fullname}
          toggleFollow={props.toggleFollow}
        />
      );
    }
  );

  return (
    <div className={classes.friends}>
      <Searchbar />
      {friendsItemElements}
    </div>
  );
};
