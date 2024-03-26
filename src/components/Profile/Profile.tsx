import React from "react";
import classes from "./Profile.module.scss";
import { HeaderProfile } from "./HeaderProfile/HeaderProfile";
import { Actions } from "./Actions/Actions";
import { WallContainer } from "./Wall/WallContainer";

export const Profile = (props: any) => {
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
      <WallContainer />
    </div>
  );
};
