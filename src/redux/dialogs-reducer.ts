export const SEND_MESSAGE = 'SEND_MESSAGE'


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

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE: {

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
type SendMessageActionType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string
}
export const sendMessageActionCreator = (newMessageBody: string): SendMessageActionType => ({ type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer