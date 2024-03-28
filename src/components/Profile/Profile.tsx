import React from "react";
import classes from "./Profile.module.scss";
import { HeaderProfile } from "./HeaderProfile/HeaderProfile";
import { Actions } from "./Actions/Actions";
import { Wall } from "./Wall/Wall";

export const Profile = (props: any) => {
  console.log(props.profile);
  return (
    <div className={classes.profile}>
      <HeaderProfile
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        updatePhoto={props.updatePhoto}
        updateProfile={props.updateProfile}
      />
      <Actions />
      <Wall
        profile={props.profile}
        posts={props.posts}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
      />
    </div>
  );
};
