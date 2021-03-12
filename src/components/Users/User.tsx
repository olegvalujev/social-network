import React from "react";
import styles from "./Users.module.css"
import defaultAvatar from './../../assets/rudolf_small.png'
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";

type OwnPropsType = {
    user: UserType
    followingInProgress: Array<number>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    isAuth: boolean
}

const User: React.FC<OwnPropsType> = ({user, followingInProgress, unFollow, follow, isAuth}) => {
    return (
        <div className={styles.userBlock}>
            {user.status && <div>user.status</div>}

            <div className={styles.row}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : defaultAvatar}
                         className={styles.avatar} alt={'User avatar'}/>
                </NavLink>
            </div>

            <div className={styles.row}>
                <div><span className={styles.userDetails}>User name: </span>{user.name}</div>
                <div><span className={styles.userDetails}>User status: </span>{user.status}</div>
                <div>
                {
                    user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id) || !isAuth}
                                  onClick={() => unFollow(user.id) }
                        >Unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id) || !isAuth}
                                  onClick={() => follow(user.id)}>Follow</button>
                }
                </div>
            </div>


        </div>
    )
}

export default User