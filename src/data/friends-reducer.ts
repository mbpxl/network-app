
const initialState = {
  friends: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}

export const friendsReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case SET_FRIENDS:
      return {...state, friends: [...action.friends]};
    
    case FOLLOW_USER:
      return {
        ...state,
        friends: state.friends.map((f: {id: number, followed: boolean}) => {
          if(f.id === action.id) {
            return {...f, followed: true};
          }
          return f;
        })
      }

    case UNFOLLOW_USER:
      return {
        ...state,
        friends: state.friends.map((f: {id: number, followed: boolean}) => {
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
      : state.followingInProgress.filter((id: number) => id !== action.userId)}
    default:
      return state;
  }
}

const FOLLOW_USER = "FOLLOW_USER";
export const followUserAC = (id: number) => ({type: FOLLOW_USER, id});

const UNFOLLOW_USER = "UNFOLLOW_USER";
export const unfollowUserAC = (id: number) => ({type: UNFOLLOW_USER, id});

const SET_FRIENDS = "SET_FRIENDS";
export const setFriendsAC = (friends: any) => ({type: SET_FRIENDS, friends}); // friends: friends

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}); // currentPage: currentPage

const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
export const setUsersTotalCount = (totalCount: number) => ({type: SET_USERS_TOTAL_COUNT, totalCount}); //totalCount: totalCount

const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const setIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching});

const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";
export const followingInProgressAC = (isFollowing: boolean, userId: number) => ({type: FOLLOWING_IN_PROGRESS, isFollowing, userId});