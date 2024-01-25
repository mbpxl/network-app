export interface actionsType {
  type: string;
  newText: string,
  newMessage: string,
  userId: number,
  friends: Array<{id: number | string, followed: boolean, fullName: string, status: string, location: {city: string, country: string}}>,
}

export interface profilePage {
  posts: Array<{id: number, message: string, likesCount: number,}>;
}
