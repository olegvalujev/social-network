import React from "react";
import Post from "../Profile/MyPosts/Post/Post";

const Users = (props) => {
    console.log(props)
   // let props.users.map(p => (<Post id={p.id} key={p.id} message={p.message} likesCount={p.likesCount}/>))
    return <div>{ props.users.map(u => (
        <div id={u.id} key={u.id}>
            {u.status}
            <span>
                <div>
                    <img />
                </div>
                <div>
                    <button>Follow</button>
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)) }
    </div>
}

export default Users