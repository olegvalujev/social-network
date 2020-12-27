import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";

let store = {
    _state: {
        dialogsPage: {
            dialogs:[
                {id: 1, name: 'Domich'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Dasha'},
                {id: 4, name: 'Pasha'},
                {id: 5, name: 'Katherina'},
                {id: 6, name: 'Dominika'},
                {id: 7, name: 'Maria'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Who are you'},
                {id: 4, message: 'Where are you going'},
                {id: 5, message: 'Why dont you live?'},
                {id: 6, message: 'Why dont you enjoy?'},
                {id: 7, message: 'You dont like my creation ?'},
                {id: 8, message: 'I like it, but it is so hard that i want to die...'},
                {id: 9, message: 'I like it, but it is so hard that i want to die...'},
            ],
            newMessageText: 'it-kamasutra'
        },
        profilePage: {
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
        },
        sidebarPage: {}
    },
    _subscriber() {
        console.log('state changed')
    },
    getState(){
        return this._state
    },
    subscribe(observer) {
        this._subscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

        this._subscriber(this._state)
    }
}

export default store