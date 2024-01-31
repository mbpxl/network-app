import avatar1 from "../../assets/img/messages/messages-pre1.png";
import avatar2 from "../../assets/img/messages/messages-pre2.png";
import avatar3 from "../../assets/img/messages/messages-pre3.png";
import avatar4 from "../../assets/img/messages/messages-pre4.png";

import React from "react";
import { Searchbar } from "../Profile/Searchbar/Searchbar";
import classes from "./Friends.module.scss";
import { FriendsItem } from "./FriendsItem/FriendsItem";
import axios from "axios";

export const Friends = (props: any) => {
  if (props.friends.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        debugger;
        props.setFriends();
      });
  }
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
