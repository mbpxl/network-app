import avatar1 from "../assets/img/messages/messages-pre1.png"
import avatar2 from "../assets/img/messages/messages-pre2.png"
import avatar3 from "../assets/img/messages/messages-pre3.png"
import avatar4 from "../assets/img/messages/messages-pre4.png"
import avatar5 from "../assets/img/messages/messages-pre5.png"
import avatar6 from "../assets/img/messages/messages-pre6.png"

const initialState = {
  friends: [
    {id: 1, avatar: avatar1, followed: true, fullname: 'Smith', lastMessage: `bye`, locaton: {city: 'Los Angeles', country: 'USA'},},
    {id: 2, avatar: avatar2, followed: false, fullname: 'Alexandr', lastMessage: `image`, locaton: {city: 'Berlin', country: 'Germany'},},
    {id: 3, avatar: avatar3, followed: true, fullname: 'Rone', lastMessage: `good morning`, locaton: {city: 'London', country: 'England'},},
    {id: 4, avatar: avatar4, followed: true, fullname: 'Ilya', lastMessage: `see you in friday`, locaton: {city: 'Saint-Petersbutg', country: 'Russia'},},
  ]
}

export const friendsReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        friends: state.friends.map(f => {
          debugger;
          if(f.id === action.id) {
            return {...f, followed: !f.followed};
          }
          return f;
        }),
      }
    
    case SET_FRIENDS:
      return {...state, friends: [...state.friends, ...action.friends]};
    default:
      return state;
  }
}


const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
export const toggleFollow = (id: number) => ({type: TOGGLE_FOLLOW, id});

const SET_FRIENDS = "SET-FRIENDS";
export const setFriendsAC = (friends: any) => ({type: SET_FRIENDS, friends});