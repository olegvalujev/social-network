export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'



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
    newPostText: 'it-kamasutra'
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
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST})
export const updateNewTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer