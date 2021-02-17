import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from '../../../utils/validators/validators'
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength200 = maxLength(200)

const MyPosts = React.memo(props => {
    let postsElements = [...props.posts]
        .reverse()
        .map(p => (<Post id={p.id} key={p.id} message={p.message} likesCount={p.likesCount}/>))

    let addNewPost = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts:</h3>
            <PostFormRedux className={s.postsForm} onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const PostForm = (props) => {
    let { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'newPostBody'} component={Textarea} validate={[required, maxLength200]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const PostFormRedux = reduxForm({form: 'postForm'})(PostForm)

export default MyPosts;