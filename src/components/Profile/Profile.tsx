import React from "react";
import classes from "./Profile.module.scss";
import { HeaderProfile } from "./HeaderProfile/HeaderProfile";
import { Actions } from "./Actions/Actions";
import { Wall } from "./Wall/Wall";
import { ProfilePropsType } from "./ProfileTypes";

export const Profile = (props: ProfilePropsType) => {
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
        value={props.startPostValue}
      />
    </div>
  );
};
