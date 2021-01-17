import {profileAPI, usersAPI} from "../api/api";

export const ADD_POST = 'ADD-POST'
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
    newPostText: 'it-kamasutra',
    profile: null,
    status: null,
}

const profileReducer  = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: 5,
                        message: state.newPostText,
                        likesCount: 0
                    }
                ],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
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
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST})
export const updateNewTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (!response.data.resultCode) {
            dispatch(setStatus(status))
        }
    })
}
export default profileReducer