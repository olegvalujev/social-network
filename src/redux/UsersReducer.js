export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'UNFOLLOW'


let initialState = {
    users: [
        {id: 1, followed:false, fullName: 'Dmitri', status: 'Looking for job', location: {country: 'Belarus', city: 'Minsk'} },
        {id: 2, followed:false, fullName: 'Pavel', status: 'Looking for job', location: {country: 'Belarus', city: 'Minsk'} },
        {id: 3, followed:false, fullName: 'Den', status: 'Looking for job', location: {country: 'Belarus', city: 'Minsk'} },
        {id: 4, followed:false, fullName: 'Nataly', status: 'Looking for job', location: {country: 'Belarus', city: 'Minsk'} },
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u
                }),
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                }),
            }

        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users]}

        default:
            return state

    }

}

export const followAC = (userId) => ({ type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer