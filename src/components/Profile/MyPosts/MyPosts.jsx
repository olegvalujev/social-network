import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => (<Post id={p.id} message={p.message} likesCount={p.likesCount}/>))

    let newPostText = React.createRef()
    let addPost = () => {
        debugger;
        let text = newPostText.current.value
        props.addPost(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts:</h3>
            <div>
                <div>
                    <textarea ref={newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}> Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;