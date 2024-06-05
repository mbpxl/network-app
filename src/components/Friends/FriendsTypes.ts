import { FilterType } from "../../data/friends-reducer";

export type FriendsPropsTypes = {
  onPageChanged: (pageNumber: number) => void;
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  friends: Array<FriendsType>;
  followingInProgress: any[];
  getFollowingThunk: (userId: number) => void;
  getUnfollowingThunk: (userId: number) => void;
  portionSize: number;
  onFilterChanged: (filter: FilterType) => void;
}

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