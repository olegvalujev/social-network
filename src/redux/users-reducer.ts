import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/helpers/object-helpers";
import {
    FollowSuccessActionType, SetCurrentPageActionType,
    SetUsersActionType,
    SetUsersTotalCountActionType, ToggleFollowingInProgressActionType, ToggleIsFetchingActionType,
    UnFollowSuccessActionType,
    UserType
} from "../types/types";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> // array of user ID's
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }

        case SET_USERS:
            return {...state, users: [...action.users]}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state

    }

}


export const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId: number): UnFollowSuccessActionType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount: number): SetUsersTotalCountActionType => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): ToggleFollowingInProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))

        let response = await usersAPI.getUsers(page, pageSize)

        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setUsersTotalCount(response.totalCount))
    }
}

const followUnFollowFlow = async (dispatch: any, userId: number, apiMethod: Function, actionCreator: any) => {
    dispatch(toggleFollowingInProgress(true, userId))

    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const unFollow = (userId: number) => {
    return async (dispatch: any) => {
        await followUnFollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollowSuccess)
    }
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        await followUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}

export default usersReducer