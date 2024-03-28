import React, { useState } from "react";
import classes from "./HeaderProfile.module.scss";
import edit from "../../../assets/img/profile/profile-edit.svg";
import { Preloader } from "../../Preloader/Preloader";
import { ProfileData } from "./ProfileData/ProfileData";
import { ProfileDataForm } from "./ProfileData/ProfileDataForm";
import clsx from "clsx";

export const HeaderProfile = (props: any) => {
  let [isEditMode, setEditMode] = useState(false);
  let [isOpen, setOpen] = useState(false);
  if (!props.profile) {
    return <Preloader />;
  }

  const onSelectedAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      props.updatePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={classes.info}>
      <div className={classes.info__bg}>
        {props.isOwner ? (
          <div className={classes.info__bg_edit}>
            <button
              className={classes.info__bg_btn}
              onClick={() => {
                setOpen(!isOpen);
              }}
            >
              <img src={edit} alt="edit" className={classes.info__bg_img} />
            </button>
            <ul
              className={clsx(
                classes.info__popup,
                isOpen ? classes.info__popup_active : null
              )}
            >
              <li className={classes.info__popup_item}>
                <div className={classes.info__popup_photo}>
                  <label htmlFor="load_avatar">
                    <p>Edit avatar</p>
                    <input
                      id="load_avatar"
                      type={"file"}
                      className={classes.info__bg_file}
                      title="Edit avatat11"
                      onChange={onSelectedAvatar}
                    />
                  </label>
                </div>
              </li>
              <li className={classes.info__popup_item}>
                <div className={classes.info__popup_profile}>
                  <button
                    onClick={() => {
                      setEditMode(!isEditMode);
                    }}
                  >
                    {isEditMode ? "Save" : "Edit Profile"}
                  </button>
                </div>
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      {isEditMode ? (
        <ProfileDataForm
          updateProfile={props.updateProfile}
          profile={props.profile}
        />
      ) : (
        <ProfileData
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          isOwner={props.isOwner}
        />
      )}
    </div>
  );
};
