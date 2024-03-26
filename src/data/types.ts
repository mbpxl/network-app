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
  fullName: string,
  aboutMe: string,
  friends: Array<{id: number | string, followed: boolean, fullName: string, status: string, location: {city: string, country: string}, newPost: string}>,
}

type PhotosType = {
  small: string;
  large: string;
};

type ContactsType = {
  github?: string;
  vk?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  website: string;
  youtube?: string;
  mainLink: string;
};

export type ProfileType = {
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  aboutMe: string | null;
};
