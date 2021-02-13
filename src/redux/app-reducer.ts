import {getAuthUserData} from "./auth-reducer";

export const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS'

export type InitialStateType = {
    initialized: boolean
}
let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializationSuccessActionType = {
    type: typeof INITIALIZATION_SUCCESS
}

export const initializationSuccess = (): InitializationSuccessActionType => ({type: INITIALIZATION_SUCCESS})
export const initializeApp = () => (dispatch: any) =>  {
    dispatch(getAuthUserData()).then(() => {
        dispatch(initializationSuccess())
    })

}
export default appReducer