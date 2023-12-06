import { actionTypes } from "./actionTypes";

const profileReducer = (state: any, action: actionTypes) => {

  switch (action.type) {
    case 'ADD-POST':
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
    
      state.posts.push(newPost);
      state.newPostText = '';
    break;

    case 'UPDATE-NEW-POST-TEXT':
      state.newPostText = action.newText;
    break;

    default:
      console.log('Hello World!');
    }

  return state;
}

export default profileReducer;