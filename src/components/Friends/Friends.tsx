import avatar1 from "../../assets/img/messages/messages-pre1.png";
import avatar2 from "../../assets/img/messages/messages-pre2.png";
import avatar3 from "../../assets/img/messages/messages-pre3.png";
import avatar4 from "../../assets/img/messages/messages-pre4.png";
import emty_user from "../../assets/img/friends/empty-user.svg";

import React from "react";
import { Searchbar } from "../Profile/Searchbar/Searchbar";
import classes from "./Friends.module.scss";
import axios from "axios";

type MyProps = {
  friends: Array<any>;
  setFriends: any;
  toggleFollow: any;
};

export class Friends extends React.Component<MyProps> {
  componentDidMount(): void {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setFriends(response.data.items);
      });
  }

  render() {
    return (
      <div className={classes.friends}>
        <Searchbar />
        {this.props.friends.map(
          (f: {
            name: string;
            photos: any;
            id: number | string;
            followed: boolean;
          }) => (
            <div className={classes.friends_item}>
              <div className={classes.friends_item__content}>
                <div className={classes.friends_item__avatar}>
                  <img
                    src={f.photos.small != null ? f.photos.small : emty_user}
                    alt="avatar"
                  />
                </div>
                <div className={classes.friends_item__context}>
                  <div className={classes.friends_item__name}>
                    <h1>{f.name}</h1>
                  </div>
                  <div className={classes.friends_item__write}>
                    {f.followed ? (
                      <button
                        onClick={() => {
                          this.props.toggleFollow(f.id);
                        }}
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          this.props.toggleFollow(f.id);
                        }}
                      >
                        Follow
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    );
  }
}
