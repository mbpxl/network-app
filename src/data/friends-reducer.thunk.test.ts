import { getFollowingThunkCreator } from "./friends-reducer";
import { friendsAPI } from "../plugins/axios";
import { FollowUnfollowType, ResultCodes } from "../plugins/axiosTypes";
jest.mock("../plugins/axios");

const result: FollowUnfollowType = {
  resultCode: ResultCodes.Success,
  messages: [],
  userId: 0,
}



// eslint-disable-next-line jest/valid-title
test('', async () => {
  // @ts-ignore
  friendsAPI.follow.mockReturnValue(result);
  const thunk = getFollowingThunkCreator(1);
  const dispatchMock = jest.fn();
  // @ts-ignore
  await thunk(dispatchMock);


  expect(dispatchMock).toBeCalledTimes(3);
})