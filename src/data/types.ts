export interface actionsType {
  type: string;
  newText: string,
  newMessage: string,
  profile: any,
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  userId: number,
  posts: any,
  status: string,
  photos: PhotosType;
  friends: Array<{id: number | string, followed: boolean, fullName: string, status: string, location: {city: string, country: string}, newPost: string}>,
}

type PhotosType = {
  small: string;
  large: string;
};

export type ProfileType = {
  userId: number | null;
  fullname: string | null;
  photos: PhotosType;
}
