import {updateObjectInArray} from "../utils/helpers/object-helpers";
import {Dispatch} from "redux";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {UserType} from "../types/types";
import {usersAPI} from "../api/users-api";
import {APIResponseType} from "../api/api";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, // array of user ID's
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/USERS/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case 'SN/USERS/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case 'SN/USERS/SET_USERS':
            return {...state, users: [...action.users]}
        case 'SN/USERS/SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SN/USERS/SET_USERS_TOTAL_COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'SN/USERS/TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
            }
        case 'SN/USERS/SET_FILTER':
            return {...state, filter: action.filter}
        default:
            return state
    }
}

export const actions = {
    followSuccess: (userId: number) => ({type: 'SN/USERS/FOLLOW', userId} as const),
    unFollowSuccess: (userId: number) => ({type: 'SN/USERS/UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SN/USERS/SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SN/USERS/SET_CURRENT_PAGE', currentPage} as const),
    setUsersTotalCount: (totalUsersCount: number) => ({type: 'SN/USERS/SET_USERS_TOTAL_COUNT', totalUsersCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const),
    setFilter: (filter: FilterType) => ({type: 'SN/USERS/SET_FILTER', filter} as const)
}

export const requestUsers = (page: number, pageSize: number, filter: FilterType): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(page))
        dispatch(actions.setFilter(filter))

        let response = await usersAPI.getUsers(page, pageSize, filter)

        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(response.items))
        dispatch(actions.setUsersTotalCount(response.totalCount))
    }
}

const _followUnFollowFlow = async (dispatch: Dispatch<ActionsType>,
                                   userId: number,
                                   apiMethod: (userId: number) => Promise<APIResponseType>,
                                   actionCreator: (userId: number) => ActionsType)  => {
    dispatch(actions.toggleFollowingInProgress(true, userId))

    let data = await apiMethod(userId)

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }

    dispatch(actions.toggleFollowingInProgress(false, userId))
}

export const unFollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnFollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), actions.unFollowSuccess)
    }
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
    }
}

export const setCurrentPage = (page: number): ThunkType => {
    return async (dispatch) =>
    {
        await dispatch(actions.setCurrentPage(page))
    }
}

export default usersReducer

export type InitialStateType = typeof initialState
export type FilterType = typeof  initialState.filter
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>