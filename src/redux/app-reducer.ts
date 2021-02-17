import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "redux";
import {InferActionsTypes} from "./redux-store";

export const INITIALIZATION_SUCCESS = 'SN/APP/INITIALIZATION_SUCCESS'

let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIALIZATION_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state

    }
}

type DispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<Promise<void>, InitialStateType, unknown, ActionsType>

export const actions = {
    initializationSuccess: () => ({type: 'SN/APP/INITIALIZATION_SUCCESS'} as const)
}

export const initializeApp = (): ThunkType => async (dispatch: DispatchType) =>  {
    let promise = dispatch(getAuthUserData())

    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializationSuccess())
        })
}
export default appReducer