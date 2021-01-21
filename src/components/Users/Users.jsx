import React from "react";
import styles from "./Users.module.css"
import defaultAvatar from './../../assets/rudolf_small.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {Paginator} from "../common/Paginator/Paginator";

const Users = ({totalUsersCount, pageSize, onPagedChanged, currentPage, ...props}) => {

    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       onPagedChanged={onPagedChanged}
                       currentPage={currentPage}/>
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
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => props.unFollow(u.id) }
                            >Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => props.follow(u.id)}>Follow</button>
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