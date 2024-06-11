
export type FriendsType = {
  id: number;
  name: string;
  status: string | null;
  photos: PhotosType;
  followed: boolean;
}

export type PhotosType = {
  small: string | null;
  large: string | null;
};

export type AppAdditionalTypes = {
  initialized: boolean;
  initializeApp: () => void;
}

export interface friendsActionTypes {
  type: string;
  newMessage: string,
}