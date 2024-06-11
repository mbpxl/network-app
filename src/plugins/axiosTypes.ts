import { PhotosType } from "../components/Friends/FriendsTypes";
import { ProfileType } from "../components/Profile/ProfileTypes";

export enum ResultCodes {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10,
}


//*[FRIENDS API]===================================================
export type GetFriends = {
  items: Array<{
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean;
  }>;
  totalCount: number;
  error: string;
}

export type FollowUnfollowType = {
  userId: number,
  resultCode: ResultCodes;
  messages: Array<string>;
}
//*[FRIENDS API]===================================================


//![LOGIN API]=====================================================
export type GetLoginDataType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: ResultCodes;
  message: Array<string>;
}

export type LoginTypes = {
  data: {
    userId: number;
  }
  resultCode: ResultCodes;
  messages: Array<string>;
}

export type LogoutTypes = {
  data: {
    userId: number;
  }
  resultCode: ResultCodes;
  messages: Array<string>;
}
//![LOGIN API]=====================================================

//todo [PROFILE API]====================================================
export type GetUserType = ProfileType;

export type UpdateStatus = {
  data: {
    userId: number;
  }
  resultCode: ResultCodes;
  messages: Array<string>;
}

export type SavePhoto = {
  data: {
    photos: {
      small: string;
      large: string;
    }
  }
  resultCode: ResultCodes;
  messsages: Array<string>;
}

export type UpdateProfileType = {
  data: {
    userId: number;
  }
  resultCode: ResultCodes;
  messsages: Array<string>;
}
//todo [PROFILE API]====================================================