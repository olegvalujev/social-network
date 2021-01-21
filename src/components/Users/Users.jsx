import React from "react";
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
                   totalUsersCount, pageSize, onPagedChanged, currentPage, user,
                   followingInProgress, unFollow, follow, ...props
               }) => {

    return <div>
            <Paginator totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       onPagedChanged={onPagedChanged}
                       currentPage={currentPage}/>
           <div>
                {props.users.map(u => (<User key={u.id} user={u}
                                             followingInProgress={followingInProgress}
                                             unFollow={unFollow}
                                             follow={follow}/>))}
           </div>
        </div>
}

export default Users