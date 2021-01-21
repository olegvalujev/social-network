import {getAuthUserData} from "./AuthReducer";

export const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS'


let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state

    }
}

export const initializationSuccess = () => ({type: INITIALIZATION_SUCCESS})
export const initializeApp = () => (dispatch) =>  {
    dispatch(getAuthUserData()).then(response => {
        dispatch(initializationSuccess())
    })

}
export default appReducer