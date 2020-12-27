export const ADD_DIALOG_POST = 'ADD-DIALOG-POST'
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


let initialState = {
    dialogs:[
        {id: 1, name: 'Dominik'},
        {id: 2, name: 'Dmitrij'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Pavel'},
        {id: 5, name: 'Katherina'},
        {id: 6, name: 'Vladimir'},
        {id: 7, name: 'Maria'},
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Who are you?'},
        {id: 4, message: 'Where are you going?'},
        {id: 6, message: 'Lets watch football!'},
        {id: 7, message: 'Do you like my art ?'}
    ],
    newMessageText: 'Your message text'
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_DIALOG_POST: {

            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: 10,
                        message: state.newMessageText
                    }
                ],
                newMessageText: ''
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state

    }

}

export const addDialogPostActionCreator = () => ({ type: ADD_DIALOG_POST})
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer