import React, {FC} from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from './Users.module.css'
import {UserType} from "../../types/types"
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType} from "../../redux/users-reducer";

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
    onFilterChanged: (filter: FilterType) => void
}
const Users: FC<PropsType> = React.memo((props) => {

    return <div>
        <UsersSearchForm onFilterChanged={props.onFilterChanged}/>
        <Paginator totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   onPageChanged={props.onPageChanged}
                   currentPage={props.currentPage}
                   portionSize={10}/>
        <div className={styles.usersWrapper}>
            {props.users.map(u => (
                <User key={u.id} user={u}
                      followingInProgress={props.followingInProgress}
                      unFollow={props.unFollow}
                      follow={props.follow}
                      isAuth={props.isAuth}
                />
            ))}
        </div>
    </div>
})

export default Users