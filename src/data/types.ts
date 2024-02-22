export interface actionsType {
  type: string;
  newText: string,
  newMessage: string,
  profile: any,
  userId: number,
  posts: any,
  friends: Array<{id: number | string, followed: boolean, fullName: string, status: string, location: {city: string, country: string}, newPost: string}>,
}

export interface authTypes {
  userId: number | string | null,
  email: string | null,
  login: string | null,
}
