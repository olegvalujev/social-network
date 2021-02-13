import {
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_USERS,
    SET_USERS_TOTAL_COUNT,
    TOGGLE_IS_FETCHING, TOGGLE_IS_FOLLOWING_PROGRESS,
    UNFOLLOW
} from "../redux/users-reducer";

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type ContactType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactType
    photos: PhotosType
}

export type UserType = {
    name: string,
    id: number,
    photos: PhotosType,
    status: string,
    followed: boolean
}

export type FollowSuccessActionType = {
    type: typeof FOLLOW,
    userId: number
}
export type UnFollowSuccessActionType = {
    type: typeof UNFOLLOW,
    userId: number
}
export type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}
export type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
export type SetUsersTotalCountActionType = {
    type: typeof SET_USERS_TOTAL_COUNT,
    totalUsersCount: number
}
export type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export type ToggleFollowingInProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}