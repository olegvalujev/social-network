import {INITIALIZATION_SUCCESS} from "../redux/app-reducer";

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