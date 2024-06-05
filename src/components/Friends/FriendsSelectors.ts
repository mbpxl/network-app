import { AppStateType } from "../../data/store-redux";

export const getFriends = (state: AppStateType) => {
  return state.friendsReducer.friends;
}

export const getPageSize = (state: AppStateType) => {
  return state.friendsReducer.pageSize;
}

export const getTotalUserCount = (state: AppStateType) => {
  return state.friendsReducer.totalUserCount;
}

export const getCurrentPage = (state: AppStateType) => {
  return state.friendsReducer.currentPage;
}

export const getIsFetching = (state: AppStateType) => {
  return state.friendsReducer.isFetching;
}

export const getFollowingInProgress = (state: AppStateType) => {
  return state.friendsReducer.followingInProgress;
}

export const getPortionSize = (state: AppStateType) => {
  return state.friendsReducer.portionSize;
}

export const getFilter = (state: AppStateType) => {
  return state.friendsReducer.filter;
}