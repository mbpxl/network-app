import avatar1 from "../assets/img/messages/messages-pre1.png"
import avatar2 from "../assets/img/messages/messages-pre2.png"
import avatar3 from "../assets/img/messages/messages-pre3.png"
import avatar4 from "../assets/img/messages/messages-pre4.png"
import avatar5 from "../assets/img/messages/messages-pre5.png"
import avatar6 from "../assets/img/messages/messages-pre6.png"

const initialState = {
  friends: [],
}

export const friendsReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case SET_FRIENDS:
      return {...state, friends: [...state.friends, ...action.friends]};
    
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
    default:
      return state;
  }
}


const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
export const toggleFollow = (id: number) => ({type: TOGGLE_FOLLOW, id});

const SET_FRIENDS = "SET-FRIENDS";
export const setFriendsAC = (friends: any) => ({type: SET_FRIENDS, friends});