import { PhotosType } from "../Friends/FriendsTypes";

export type ProfileType = {
  userId: number;
  lookingForAJob: string;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  }
  photos: PhotosType;
}

export type ProfilePropsType = {
  isOwner: boolean;
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
  updatePhoto: (photo: File) => void;
  updateProfile: (fullName: string) => void;
  posts: Array<{ id: number; message: string; likesCount: number }>;
  updateNewPostText: Function;
  addPost: (text: string) => void;
  startPostValue: string;
}

export type HeaderProfilePropsType = {
  isOwner: boolean;
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
  updatePhoto: (photo: File) => void;
  updateProfile: (fullName: string) => void;
}

export type ProfileDataFormPropsType = {
  profile: ProfileType;
  updateProfile: (fullName: string) => void;
}

export type ProfileDataPropsType = {
  profile: ProfileType;
  isOwner: boolean;
  status: string;
  updateStatus: (status: string) => void;
}

export type WallPropsType = {
  profile: ProfileType;
  posts: Array<{ id: number; message: string; likesCount: number }>;
  updateNewPostText: Function;
  addPost: (text: string) => void;
  value: string;
}

