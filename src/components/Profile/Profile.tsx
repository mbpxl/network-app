import React from "react";
import classes from "./Profile.module.scss";
import { HeaderProfile } from "./HeaderProfile/HeaderProfile";
import { Actions } from "./Actions/Actions";
import { WallContainer } from "./Wall/WallContainer";

export const Profile = (props: any) => {
  //debugger;
  // store={props.store}
  return (
    <div className={classes.profile}>
      <HeaderProfile
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <Actions />
      <WallContainer />
    </div>
  );
};
