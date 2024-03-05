import React from "react";
import classes from "./HeaderProfile.module.scss";

type myProps = {
  status: string;
  updateStatus: Function;
};

export class ProfileStatus extends React.Component<myProps> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  onActivateEditMode = () => {
    this.setState({
      editMode: true,
    });
    //* this.forceUpdate();
  };

  onDeactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(
    prevProps: Readonly<myProps>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }

    console.log("UPDATED");
  }

  render() {
    return (
      <div className={classes.status}>
        {this.state.editMode ? (
          <div className={classes.profile_status_edit}>
            <div className={classes.profile_status_edit__input}>
              <input
                value={this.state.status}
                type="text"
                onChange={this.onStatusChange}
              />
            </div>
            <div className={classes.profile_status_edit__btn}>
              <button onClick={this.onDeactivateEditMode}>OK</button>
            </div>
          </div>
        ) : (
          <div className={classes.profile_status_stable}>
            <span onDoubleClick={this.onActivateEditMode}>
              {this.props.status || "---"}
            </span>
          </div>
        )}
      </div>
    );
  }
}
