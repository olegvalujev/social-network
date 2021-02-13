import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unFollow,
    toggleIsFetching,
    toggleFollowingInProgress,
    requestUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors";
import {getIsAuth} from "../../redux/auth-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type PropsType = {
    pageTitle: string
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount:number
    users: Array<UserType>
    followingInProgress: Array<number>
    isAuth: boolean
    requestUsers: (currentPage: number, pageSize: number) => void
    setCurrentPage: (pageNumber: number) => void
    unFollow: (userId: number) => Promise<void>
    follow: (userId: number) => Promise<void>
}
class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        if (this.props.isFetching) return <Preloader/>

        return <>
            <h2>{this.props.pageTitle}</h2>
            <Users totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onPageChanged={this.onPageChanged}
                          users={this.props.users}
                          unFollow={this.props.unFollow}
                          follow={this.props.follow}
                          followingInProgress={this.props.followingInProgress}
                          isAuth={this.props.isAuth}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
};


export default compose(
    connect(mapStateToProps, {follow, unFollow, setCurrentPage, toggleIsFetching, requestUsers})
)(UsersContainer)
