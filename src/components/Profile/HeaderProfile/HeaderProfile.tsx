import React from "react";
import classes from "./HeaderProfile.module.scss";
import edit from "../../../assets/img/profile/profile-edit.svg";
import { Preloader } from "../../Preloader/Preloader";
import empty_user from "../../../assets/img/friends/empty-user.svg";
import { ProfileStatusH } from "./ProfileStatusH";

export const HeaderProfile = (props: any) => {
  console.log(props.profile);
  if (!props.profile) {
    return <Preloader />;
  }

  const onSelectedAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      console.log("Photo loaded... ...");
      //todo: props.savePhoto(e.target.files[0]);
      props.updatePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={classes.info}>
      <div className={classes.info__bg}>
        {/* <div className={classes.info__bg_edit}>
          <a href="#">
            <img src={edit} alt="edit" />
          </a>
        </div> */}
        {props.isOwner ? (
          <div className={classes.info__bg_edit}>
            <button className={classes.info__bg_btn}>
              <img src={edit} alt="edit" className={classes.info__bg_img} />
              <input
                type={"file"}
                className={classes.info__bg_file}
                title=""
                onChange={onSelectedAvatar}
              />
            </button>
          </div>
        ) : null}
      </div>
      <div className={classes.bio}>
        <div className={classes.bio__counts}>
          <a href="#" className={classes.bio__counts_content}>
            <h1>2.5K</h1>
            <h2>FOLLOWERS</h2>
          </a>
          <a href="#" className={classes.bio__counts_content}>
            <h1>1.3K</h1>
            <h2>FOLLOWING</h2>
          </a>
          <a href="#" className={classes.bio__counts_content}>
            <h1>653K</h1>
            <h2>SUPPORTERS</h2>
          </a>
        </div>
        <div className={classes.bio__personal}>
          <img
            src={
              props.profile.photos.small != null
                ? props.profile.photos.small
                : empty_user
            }
            className={classes.bio__avatar}
            alt="avatar"
          />
          <h3>{props.profile.fullName}</h3>
          <h4>@arcos111</h4>
        </div>
        <div className={classes.bio__status}>
          <ProfileStatusH
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
      </div>
    </div>
  );
};
