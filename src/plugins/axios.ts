import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
  "API-KEY": "35c71cbe-056d-4f3a-8b86-227cea546bb3",
  },
});

export const friendsAPI = {
  async getFriends(currentPage: number, pageSize: number) {
    const response = await instance.get(
      `users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  }
}


export const loginAPI = {
  async getLoginData() {
    const response = await instance.get(
      `auth/me`
    );
    return response.data;
  }
}

export const profileAPI = {
  async getUser(userID: number) {
    const response = await instance.get(
      `profile/` + userID
    );
    return response.data;
  }
}