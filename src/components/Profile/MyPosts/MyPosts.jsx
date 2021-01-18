import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import { required, maxLength } from './../../../utils/validators/validators'
import {Textarea} from "../../common/FormsControls/FormsControls";
const maxLength20 = maxLength(20)

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => (<Post id={p.id} key={p.id} message={p.message} likesCount={p.likesCount}/>))

    let addNewPost = (values) => {
        console.log(values)
        props.addPost(values.newPostBody)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts:</h3>
            <PostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const PostForm = (props) => {
    let { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'newPostBody'} component={Textarea} validate={[required, maxLength20]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const PostFormRedux = reduxForm({form: 'postForm'})(PostForm)

export default MyPosts;