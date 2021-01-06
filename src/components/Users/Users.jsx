import React from "react";
import styles from "./Users.module.css"
import defaultAvatar from './../../assets/rudolf_small.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map(page => {
                        return (
                            <span key={page} onClick={() => {
                                props.onPagedChanged(page)
                            }}
                                  className={props.currentPage === page ? styles.selectedPage : undefined}>
                                {page}
                            </span>
                        )
                    })
                }
            </div>
            {
                props.users.map(u => (
                    <div id={u.id} key={u.id}>
                        {u.status}
                        <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : defaultAvatar} className={styles.avatar}/>
                    </NavLink>
                </div>
                <div>
                    {
                        u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowing(true, u.id)
                                usersAPI.unFollow(u.id)
                                    .then(data => {
                                            if (data.resultCode === 0){
                                                props.unFollow(u.id)
                                            }
                                            props.toggleIsFollowing(false, u.id)
                                        }
                                    )
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowing(true, u.id)
                                usersAPI.follow(u.id)
                                    .then(data => {
                                            if (data.resultCode === 0){
                                                props.follow(u.id)
                                            }
                                            props.toggleIsFollowing(false, u.id)
                                        }
                                    )

                            }}>Follow</button>
                    }
                </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        {/*<div>{u.location.country}</div>*/}
                        {/*<div>{u.location.city}</div>*/}
                    </span>
                </span>
                    </div>))
            }
        </div>
    )
}

export default Users