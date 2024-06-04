import { friendsAPI } from "../plugins/axios";
import { ResultCodes } from "../plugins/axiosTypes";
import { AppStateType, InferActionsTypes } from "./store-redux";
import { ThunkAction } from "redux-thunk";


export type initialStateType = {
  friends: Array<{name: string, id: number, photos: {small: null | string, large: null | string}, status: null | string, followed: boolean}>;
  pageSize: number;
  totalUserCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<any>;
  portionSize: number;
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

type rootActionType = InferActionsTypes<typeof actions>;

export const friendsReducer = (state: initialStateType = initialState, action: rootActionType): initialStateType => {
  switch(action.type) {
    case "SET_FRIENDS":
      return {...state, friends: [...action.friends]};
    
    case 'FOLLOW_USER':
      return {
        ...state,
        friends: state.friends.map(f => {
          if(f.id === action.id) {
            return {...f, followed: true};
          }
          return f;
        })
      }

    case 'UNFOLLOW_USER':
      return {
        ...state,
        friends: state.friends.map(f => {
          if(f.id === action.id) {
            return {...f, followed: false};
          }
          return f;
        })
      }

    case 'SET_CURRENT_PAGE':
      return {...state, currentPage: action.currentPage};

    case 'SET_USERS_TOTAL_COUNT':
      return {...state, totalUserCount: action.totalCount};

    case 'TOGGLE_IS_FETCHING':
      return {...state, isFetching: action.isFetching}

    case 'FOLLOWING_IN_PROGRESS':
      return {...state, followingInProgress: action.isFollowing
      ? [...state.followingInProgress, action.userId]
      : state.followingInProgress.filter(id => id !== action.userId)}

    default:
      return state;
  }
}


export const actions = {
  followUserAC: (id: number) => ({type: 'FOLLOW_USER', id} as const),
  unfollowUserAC: (id: number) => ({type: 'UNFOLLOW_USER', id} as const),
  setFriendsAC: (friends: Array<{name: string, id: number, photos: {small: string | null, large: string | null}, status: string | null, followed: boolean}>) => ({type: 'SET_FRIENDS', friends} as const),
  setCurrentPageAC: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
  setUsersTotalCount: (totalCount: number) => ({type: 'SET_USERS_TOTAL_COUNT', totalCount} as const),
  setIsFetchingAC: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
  followingInProgressAC: (isFollowing: boolean, userId: number) => ({type: 'FOLLOWING_IN_PROGRESS', isFollowing, userId} as const),
  setFilterAC: (term: string) => ({type: 'SET_FILTER', payload: term} as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, rootActionType>;

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.setIsFetchingAC(true));
    let data = await friendsAPI.getFriends(currentPage, pageSize);
    dispatch(actions.setIsFetchingAC(false));
    dispatch(actions.setFriendsAC(data.items));
    dispatch(actions.setUsersTotalCount(data.totalCount));
  }
}

export const getFollowingThunkCreator = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.followingInProgressAC(true, userId));
    let data = await friendsAPI.follow(userId);
    console.log(data);
    if(data.resultCode === ResultCodes.Success) {
      dispatch(actions.followUserAC(userId));
    }
    dispatch(actions.followingInProgressAC(false, userId));
  }
}

export const getUnfollowingThunkCreator = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.followingInProgressAC(true, userId));
    let data = await friendsAPI.unfollow(userId);
    if (data.resultCode === ResultCodes.Success) {
      dispatch(actions.unfollowUserAC(userId));
    }
    dispatch(actions.followingInProgressAC(false, userId));
  }
}