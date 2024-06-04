import {actions, friendsReducer, initialStateType} from "./friends-reducer";

let state: initialStateType;

beforeEach(() => {
  state = {
    friends: [
      {name: "Petya", id: 0, photos: {small: null, large: null}, status: "status-0", followed: false},
      {name: "Masha", id: 1, photos: {small: null, large: null}, status: "status-1", followed: false},
      {name: "Liza", id: 2, photos: {small: null, large: null}, status: "status-2", followed: true},
      {name: "Mark", id: 3, photos: {small: null, large: null}, status: "status-3", followed: true},
    ],
    pageSize: 8,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    portionSize: 10,
  }
})

test('Follow Success', () => {
  //исходные данные
  //action - какое-то действие с данными
  //ожидание, которые мы хотим

  const newState = friendsReducer(state, actions.followUserAC(1));

  expect(newState.friends[0].followed).toBeFalsy();
  expect(newState.friends[1].followed).toBeTruthy();
})

test('Unfollow Success', () => {
  const newState = friendsReducer(state, actions.unfollowUserAC(3));
  expect(newState.friends[2].followed).toBeTruthy();
  expect(newState.friends[3].followed).toBeFalsy();
})