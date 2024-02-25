import emty_user from "../../assets/img/friends/empty-user.svg";
import clsx from "clsx";

import React from "react";
import { Searchbar } from "../Profile/Searchbar/Searchbar";
import axios from "axios";
import { Friends } from "./Friends";
import preloader from "../../assets/img/friends/preloader.svg";
import { Preloader } from "../Preloader/Preloader";
import classes from "./Friends.module.scss";
import { friendsAPI } from "../../plugins/axios";

type MyProps = {
  friends: Array<any>;
  setFriends: Function;
  toggleFollow: Function;
  totalUserCount: number;
  pageSize: number;
  currentPage: number;
  setCurrentPage: Function;
  setTotalUsersCount: Function;
  isFetching: boolean;
  toggleIsFetching: Function;
  followUser: Function;
  unfollowUser: Function;
};

export class FriendsApiComponent extends React.Component<MyProps> {
  componentDidMount(): void {
    friendsAPI
      .getFriends(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setFriends(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    friendsAPI.getFriends(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setFriends(data.items);
    });
  };

  render() {
    return (
      <div>
        <div className={classes.friendsRender}></div>
        {this.props.isFetching ? <Preloader /> : null}
        <Friends
          onPageChanged={this.onPageChanged}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
          toggleFollow={this.props.toggleFollow}
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          friends={this.props.friends}
        />
      </div>
    );
  }
}
