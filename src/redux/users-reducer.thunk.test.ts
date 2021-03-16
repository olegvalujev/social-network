import {actions, follow, unFollow} from "./users-reducer";
import {usersAPI} from "../api/users-api";
import {APIResponseType, ResultCodesEnum} from "../api/api";

jest.mock("../api/users-api")

let userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

const result: APIResponseType = {
    data: {},
    resultCode: ResultCodesEnum.Success,
    messages: ['Testing message']
}

const mockDispatch = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    mockDispatch.mockClear()
    getStateMock.mockClear()
    userAPIMock.follow.mockClear()
    userAPIMock.unFollow.mockClear()
})

test('Testing userAPI follow', async () => {
    userAPIMock.follow.mockReturnValue(Promise.resolve(result))

    const thunk = follow(1)

    await thunk(mockDispatch, getStateMock, {})

    expect(mockDispatch).toBeCalledTimes(3)
    expect(mockDispatch).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, 1))
    expect(mockDispatch).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(mockDispatch).toHaveBeenNthCalledWith(3, actions.toggleFollowingInProgress(false, 1))
})

test('Testing userAPI unfollow', async () => {
    userAPIMock.unFollow.mockReturnValue(Promise.resolve(result))

    const thunk = unFollow(1)

    await thunk(mockDispatch, getStateMock, {})

    expect(mockDispatch).toBeCalledTimes(3)
    expect(mockDispatch).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, 1))
    expect(mockDispatch).toHaveBeenNthCalledWith(2, actions.unFollowSuccess(1))
    expect(mockDispatch).toHaveBeenNthCalledWith(3, actions.toggleFollowingInProgress(false, 1))
})