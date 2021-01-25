import React from "react";
import styles from "./Users.module.css"
import defaultAvatar from './../../assets/rudolf_small.png'
import {NavLink} from "react-router-dom";

const User = ({user,followingInProgress,unFollow,follow}) => {
    return (
            <div className={styles.userBlock}>
                {user.status}
                <div>
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
                </div>
                <div>
                    <div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    <div>
                        {/*<div>{user.location.country}</div>*/}
                        {/*<div>{user.location.city}</div>*/}
                    </div>
                </div>
            </div>
    )
}

export default User