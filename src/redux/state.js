import reRenderEntireTree from "../render";

let state = {
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
        ]
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
        ]
    }
}

export let addPost = (postMessage) => {
    debugger
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    reRenderEntireTree(state);
}
export default state