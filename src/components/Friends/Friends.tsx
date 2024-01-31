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
        console.log(response.data.items);
        props.setFriends(response.data.items);
      });
  }

  const friendsData = props.friends;

  const friendsItemElements = friendsData.map(
    (f: {
      name: string;
      photos: string;
      id: number | string;
      followed: boolean;
    }) => {
      return (
        <FriendsItem
          id={f.id}
          followed={f.followed}
          photos={f.photos}
          name={f.name}
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
