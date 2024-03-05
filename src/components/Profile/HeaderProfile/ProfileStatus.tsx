import React from "react";
import classes from "./HeaderProfile.module.scss";

type myProps = {
  status: string | number;
};

export class ProfileStatus extends React.Component<myProps> {
  state = {
    editMode: false,
  };

  onActivateEditMode = () => {
    this.state.editMode = true;
    this.setState({
      editMode: true,
    });
    //* this.forceUpdate();
  };

  onDeactivateEditMode = () => {
    this.state.editMode = false;
    this.setState({
      editMode: false,
    });
  };

  render() {
    return (
      <div className={classes.status}>
        {this.state.editMode ? (
          <div className={classes.profile_status_edit}>
            <div className={classes.profile_status_edit__input}>
              <input value={this.props.status} type="text" />
            </div>
            <div className={classes.profile_status_edit__btn}>
              <button onClick={this.onDeactivateEditMode}>OK</button>
            </div>
          </div>
        ) : (
          <div className={classes.profile_status_stable}>
            <span onDoubleClick={this.onActivateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
      </div>
    );
  }
}
