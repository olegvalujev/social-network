import {profileAPI, usersAPI} from "../api/api";

export const ADD_POST = 'ADD-POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const SET_USER_PROFILE = 'SET-USER-PROFILE'
export const SET_STATUS = 'SET_STATUS'


let initialState = {
    posts: [
        {id: 1, message: 'Domich', likesCount: 0},
        {id: 2, message: 'Dima', likesCount: 0},
        {id: 3, message: 'Dasha', likesCount: 0},
        {id: 4, message: 'Pasha', likesCount: 0},
        {id: 5, message: 'Katherina', likesCount: 0},
        {id: 6, message: 'Dominika', likesCount: 0},
        {id: 7, message: 'Maria', likesCount: 0},
    ],
    profile: null,
    status: null,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: 5,
                        message: action.newPostBody,
                        likesCount: 0
                    }
                ]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (!response.resultCode) {
        dispatch(setStatus(status))
    }
}
export default profileReducer