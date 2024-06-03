import { friendsAPI } from "../plugins/axios";
import { AppStateType } from "./store-redux";
import { ThunkAction } from "redux-thunk";

// type friendsType = {
//   friends: Array<{name: string, id: string | number, photos: {small: string | null, large: string | null}, status: string | null, followed: boolean}>;
// }

type followUserType = {
  type: "FOLLOW_USER";
  id: number;
}

type unFollowUserType = {
  type: "UNFOLLOW_USER";
  id: number;
}

type setFriendsType = {
  type: "SET_FRIENDS";
  friends: Array<{name: string, id: number, photos: {small: string | null, large: string | null}, status: string | null, followed: boolean}>;
}

type setCurrentPageType = {
  type: "SET_CURRENT_PAGE";
  currentPage: number;
}

type setUsersTotalCountType = {
  type: "SET_USERS_TOTAL_COUNT";
  totalCount: number;
}

type toggleIsFetchingType = {
  type: "TOGGLE_IS_FETCHING";
  isFetching: boolean;
}

type followingInProgressType = {
  type: "FOLLOWING_IN_PROGRESS";
  isFollowing: boolean; 
  userId: number;
}

type setFilterType = {
  type: "SET_FILTER";
  filter: string;
  payload: {
    term: string;
  }
}

type initialStateType = {
  friends: Array<{name: string, id: number, photos: {small: null | string, large: null | string}, status: null | string, followed: boolean}>;
  pageSize: number;
  totalUserCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<any>;
  portionSize: number;
  filter: {
    term: string;
  }
}

const initialState = {
  friends: [],
  pageSize: 8,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
  portionSize: 10,
  filter: {
    term: '',
  }
}

type rootActionType = followUserType | unFollowUserType | setFriendsType | setCurrentPageType | setUsersTotalCountType | toggleIsFetchingType | followingInProgressType | setFilterType;

export const friendsReducer = (state: initialStateType = initialState, action: rootActionType): initialStateType => {
  switch(action.type) {
    case SET_FRIENDS:
      return {...state, friends: [...action.friends]};
    
    case FOLLOW_USER:
      return {
        ...state,
        friends: state.friends.map(f => {
          if(f.id === action.id) {
            return {...f, followed: true};
          }
          return f;
        })
      }

    case UNFOLLOW_USER:
      return {
        ...state,
        friends: state.friends.map(f => {
          if(f.id === action.id) {
            return {...f, followed: false};
          }
          return f;
        })
      }

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage};

    case SET_USERS_TOTAL_COUNT:
      return {...state, totalUserCount: action.totalCount};

    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}

    case FOLLOWING_IN_PROGRESS:
      return {...state, followingInProgress: action.isFollowing
      ? [...state.followingInProgress, action.userId]
      : state.followingInProgress.filter(id => id !== action.userId)}

    case SET_FILTER:
      return {...state, filter: action.payload}
    default:
      return state;
  }
}

const FOLLOW_USER = "FOLLOW_USER";
export const followUserAC = (id: number): followUserType => ({type: FOLLOW_USER, id});

const UNFOLLOW_USER = "UNFOLLOW_USER";
export const unfollowUserAC = (id: number): unFollowUserType => ({type: UNFOLLOW_USER, id});

const SET_FRIENDS = "SET_FRIENDS";
export const setFriendsAC = (friends: Array<{name: string, id: number, photos: {small: string | null, large: string | null}, status: string | null, followed: boolean}>): setFriendsType => ({type: SET_FRIENDS, friends}); // friends: friends

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const setCurrentPageAC = (currentPage: number): setCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage}); // currentPage: currentPage

const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
export const setUsersTotalCount = (totalCount: number): setUsersTotalCountType => ({type: SET_USERS_TOTAL_COUNT, totalCount}); //totalCount: totalCount

const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const setIsFetchingAC = (isFetching: boolean): toggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching});

const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";
export const followingInProgressAC = (isFollowing: boolean, userId: number): followingInProgressType => ({type: FOLLOWING_IN_PROGRESS, isFollowing, userId});

const SET_FILTER = "SET_FILTER";
export const setFilterAC = (term: string) => ({type: SET_FILTER, payload: term});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, rootActionType>;

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(setIsFetchingAC(true));
    let data = await friendsAPI.getFriends(currentPage, pageSize);
    dispatch(setIsFetchingAC(false));
    dispatch(setFriendsAC(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
  }
}

export const getFollowingThunkCreator = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(followingInProgressAC(true, userId));
    let data = await friendsAPI.follow(userId);
    console.log(data.resultCode);
    if(data.resultCode === 0) {
      dispatch(followUserAC(userId));
    }
    dispatch(followingInProgressAC(false, userId));
  }
}

export const getUnfollowingThunkCreator = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(followingInProgressAC(true, userId));
    let data = await friendsAPI.unfollow(userId);
    if (data.resultCode === 0) {
      dispatch(unfollowUserAC(userId));
    }
    dispatch(followingInProgressAC(false, userId));
  }
}