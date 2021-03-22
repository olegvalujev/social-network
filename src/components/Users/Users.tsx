import React, {FC, useEffect} from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from './Users.module.css'
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType, follow as followAction, requestUsers, unFollow as unFollowAction} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFilter,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";
import {getIsAuth} from "../../redux/auth-selectors";
import {useHistory} from "react-router-dom";
import queryString from "querystring";

type PropsType = {}
type QueryParamsType = {term?: string, page?: string, friend?: string}
export const Users: FC<PropsType> = React.memo((props) => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const filter = useSelector(getFilter)
    const users = useSelector(getUsers)
    const followingInProgress = useSelector(getFollowingInProgress)

    const isAuth = useSelector(getIsAuth)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as {term: string, page: string, friend: string}
        let actualPage = currentPage
        let actualFilter = filter
        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string}

        switch(parsed.friend){
            case 'null':
                actualFilter = { ...actualFilter, friend: null }
                break;
            case 'true':
                    actualFilter = { ...actualFilter, friend: true }
                break;
            case 'false':
                    actualFilter = { ...actualFilter, friend: false }
                break;
        }



        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}

        if(!!filter.term) query.term = filter.term
        if(filter.friend !== null) query.friend = String(filter.friend)
        if(currentPage !== 1 ) query.page = String(currentPage)
        history.push({
            pathname: '/developers',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    const follow = (userId: number) => {
        dispatch(followAction(userId))
    }
    const unFollow = (userId: number) => {
        dispatch(unFollowAction(userId))
    }


    return <div>
        <UsersSearchForm onFilterChanged={onFilterChanged}/>
        <Paginator totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChanged={onPageChanged}
                   currentPage={currentPage}
                   portionSize={10}/>
        <div className={styles.usersWrapper}>
            {users.map(u => (
                <User key={u.id} user={u}
                      followingInProgress={followingInProgress}
                      unFollow={unFollow}
                      follow={follow}
                      isAuth={isAuth}
                />
            ))}
        </div>
    </div>
})