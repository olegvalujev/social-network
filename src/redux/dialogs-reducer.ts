import {InferActionsTypes} from "./redux-store";

type DialogsType = {
    id: number,
    name: string
}
type MessagesType = {
    id: number,
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dominik'},
        {id: 2, name: 'Dmitrij'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Pavel'},
        {id: 5, name: 'Katherina'},
        {id: 6, name: 'Vladimir'},
        {id: 7, name: 'Maria'},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Who are you?'},
        {id: 4, message: 'Where are you going?'},
        {id: 6, message: 'Lets watch football!'},
        {id: 7, message: 'Do you like my art ?'}
    ] as Array<MessagesType>
}

export type InitialStateType = typeof initialState
export const actions = {
    sendMessage: (newMessageBody: string) => ({ type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody} as const)
}
type ActionsType = InferActionsTypes<typeof actions>

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE': {

            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: 10,
                        message: action.newMessageBody
                    }
                ]
            }
        }
        default:
            return state

    }

}


export default dialogsReducer