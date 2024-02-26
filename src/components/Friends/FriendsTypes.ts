export type FriendsTypes = {
  // will be filled
  // ...
  // ...
  // will be filled

  //*types for Friends.tsx from FriendsApiComponent.tsx:
  totalUserCount: number,
  pageSize: number,
  onPageChanged: Function,
  currentPage: number,
  selectedPage: number,
  friends: Array<{name: String, id: number, photos: {small: string | null, large: string | null}, status: string | null, followed: boolean | null}>,
  photos: {
    large: string | null,
    small: string | null,
  }
  id: number,
  name: string,
  followed: Function,
  toggleFollow: Function,
}

export type FriendsStateToPropsType = {
  friendsReducer: {
    friends: Array<{name: string, id: number, photos: {small: null | string, large: null | string}, status: null | string, followed: boolean}>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: boolean,
  }
}