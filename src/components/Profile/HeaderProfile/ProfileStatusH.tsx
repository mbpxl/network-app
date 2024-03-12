import React, { useEffect, useState } from "react";
import classes from "./HeaderProfile.module.scss";

export const ProfileStatusH = (props: {
  status: string;
  updateStatus: Function;
}) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={classes.status}>
      {editMode ? (
        <div className={classes.profile_status_edit}>
          <div className={classes.profile_status_edit__input}>
            <input type="text" onChange={onStatusChange} value={status} />
          </div>
          <div className={classes.profile_status_edit__btn}>
            <button
              onClick={() => {
                setEditMode(false);
                props.updateStatus(status);
              }}
            >
              OK
            </button>
          </div>
        </div>
      ) : (
        <div className={classes.profile_status_stable}>
          <span
            onDoubleClick={() => {
              setEditMode(true);
            }}
          >
            {props.status || "---"}
          </span>
        </div>
      )}
    </div>
  );
};
