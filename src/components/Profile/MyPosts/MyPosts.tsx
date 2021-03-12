import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import AddPostForm, {AddPostFormValuesType} from "./AddPostForm/AddPostForm";
import {PostType} from "../../../types/types";

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostBody: string) => void
}
const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {
    console.log(props)
    let postsElements = [...props.posts]
        .reverse()
        .map(p => (<Post id={p.id} key={p.id} message={p.message}/>))

    const addNewPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts:</h3>
            <AddPostForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const MyPostsMemo = React.memo(MyPosts)

export default MyPostsMemo;