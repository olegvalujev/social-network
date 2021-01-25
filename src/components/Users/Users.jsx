import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from './Users.module.css'

const Users = ({
                   totalUsersCount, pageSize, onPageChanged, currentPage, user,
                   followingInProgress, unFollow, follow, ...props
               }) => {

    return <div>
        <Paginator totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChanged={onPageChanged}
                   currentPage={currentPage}
                   portionSize={10}/>
        <div className={styles.usersWrapper}>
            {props.users.map(u => (<User key={u.id} user={u}
                                         followingInProgress={followingInProgress}
                                         unFollow={unFollow}
                                         follow={follow}
                                         isAuth={props.isAuth}
            />))}
        </div>
    </div>
}

export default Users