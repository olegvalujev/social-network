import React from "react";
import styles from "./Users.module.css"
import defaultAvatar from './../../assets/rudolf_small.png'
import {NavLink} from "react-router-dom";

const User = ({user,followingInProgress,unFollow,follow}) => {
    return (
            <div>
                {user.status}
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : defaultAvatar} className={styles.avatar}/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                    onClick={() => unFollow(user.id) }
                                >Unfollow</button>

                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => follow(user.id)}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        {/*<div>{user.location.country}</div>*/}
                        {/*<div>{user.location.city}</div>*/}
                    </span>
                </span>
            </div>
    )
}

export default User