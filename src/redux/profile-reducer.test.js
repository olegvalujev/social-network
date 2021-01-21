import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let initialState = {
    posts: [
        {id: 1, message: 'Domich', likesCount: 0},
        {id: 2, message: 'Dima', likesCount: 0},
        {id: 3, message: 'Dasha', likesCount: 0},
        {id: 4, message: 'Pasha', likesCount: 0},
    ]
}

it('New post should be added', () => {
    let action = addPostActionCreator('testing')

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(5)
    expect(newState.posts[4].message).toBe('testing')
});

it('Message of new post should be "testing"', () => {
    let action = addPostActionCreator('testing')

    let newState = profileReducer(initialState, action)

    expect(newState.posts[4].message).toBe('testing')
});

it('After deleting length of array should decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(3)
});

it('After deleting length of array must not decrement if Post ID is incorrect', () => {
    let action = deletePost(1000)

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(4)
});
