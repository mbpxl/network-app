import emty_user from "../../assets/img/friends/empty-user.svg";
import clsx from "clsx";

import React from "react";
import { Searchbar } from "../Profile/Searchbar/Searchbar";
import axios from "axios";
import { Friends } from "./Friends";

type MyProps = {
  friends: Array<any>;
  setFriends: Function;
  toggleFollow: Function;
  totalUserCount: number;
  pageSize: number;
  currentPage: number;
  setCurrentPage: Function;
  setTotalUsersCount: Function;
};

export class FriendsApiComponent extends React.Component<MyProps> {
  componentDidMount(): void {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setFriends(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setFriends(response.data.items);
      });
  };

  render() {
    return (
      <Friends
        onPageChanged={this.onPageChanged}
        toggleFollow={this.props.toggleFollow}
        totalUserCount={this.props.totalUserCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        friends={this.props.friends}
      />
    );
  }
}
