import profileReducer, {actions} from "./profile-reducer";
import {PostType, ProfileType} from "../types/types";

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
            likesCount: 0
        },
        {
            id: 2,
            message: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ',
            likesCount: 0
        },
        {
            id: 3,
            message: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
            likesCount: 0
        },
        {
            id: 4,
            message: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
            likesCount: 0
        },
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "",
}

it('New post should be added', () => {
    let action = actions.addPost('testing')

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(5)
    expect(newState.posts[4].message).toBe('testing')
});

it('Message of new post should be "testing"', () => {
    let action = actions.addPost('testing')

    let newState = profileReducer(initialState, action)

    expect(newState.posts[4].message).toBe('testing')
});

it('After deleting length of array should decrement', () => {
    let action = actions.deletePost(1)

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(3)
});

it('After deleting length of array must not decrement if Post ID is incorrect', () => {
    let action = actions.deletePost(1000)

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(4)
});
