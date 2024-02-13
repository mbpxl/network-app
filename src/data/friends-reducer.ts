import avatar1 from "../assets/img/messages/messages-pre1.png"
import avatar2 from "../assets/img/messages/messages-pre2.png"
import avatar3 from "../assets/img/messages/messages-pre3.png"
import avatar4 from "../assets/img/messages/messages-pre4.png"
import avatar5 from "../assets/img/messages/messages-pre5.png"
import avatar6 from "../assets/img/messages/messages-pre6.png"

const initialState = {
  friends: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
}

export const friendsReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case SET_FRIENDS:
      return {...state, friends: [...action.friends]};
    
    case TOGGLE_FOLLOW:
      return {
        ...state,
        friends: state.friends.map((f: {id: number, followed: boolean}) => {
          if(f.id === action.id) {
            return {...f, followed: !f.followed};
          }
          return f;
        }),
      }

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage};

    case SET_USERS_TOTAL_COUNT:
      return {...state, totalUserCount: action.totalCount};
    default:
      return state;
  }
}


const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
export const toggleFollow = (id: number) => ({type: TOGGLE_FOLLOW, id}); // id: id

const SET_FRIENDS = "SET_FRIENDS";
export const setFriendsAC = (friends: any) => ({type: SET_FRIENDS, friends}); // friends: friends

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}); // currentPage: currentPage

const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
export const setUsersTotalCount = (totalCount: number) => ({type: SET_USERS_TOTAL_COUNT, totalCount}); //totalCount: totalCount