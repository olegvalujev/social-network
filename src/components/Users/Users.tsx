import React, {FC} from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from './Users.module.css'
import {UserType} from "../../types/types";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: Array<UserType>
    followingInProgress: Array<number>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    isAuth: boolean
}
const Users: FC<PropsType> = ({totalUsersCount, pageSize, onPageChanged, currentPage, users, ...props}) => {

    return <div>
        <Paginator totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChanged={onPageChanged}
                   currentPage={currentPage}
                   portionSize={10}/>
        <div className={styles.usersWrapper}>
            {users.map(u => (
                <User key={u.id} user={u}
                     followingInProgress={props.followingInProgress}
                     unFollow={props.unFollow}
                     follow={props.follow}
                     isAuth={props.isAuth}
                />
                ))}
        </div>
    </div>
}

export default Users