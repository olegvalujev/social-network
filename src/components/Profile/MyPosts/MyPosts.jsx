import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => (<Post id={p.id} key={p.id} message={p.message} likesCount={p.likesCount}/>))

    let newPostText = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostText.current.value
        props.updateNewPostText(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts:</h3>
            <div>
                <div>
                    <textarea ref={newPostText} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}> Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;