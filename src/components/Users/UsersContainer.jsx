import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unFollow,
    toggleIsFetching,
    toggleFollowingInProgress,
    requestUsers,
    unFollowSuccess,
    followSuccess
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

class UsersContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        if (this.props.isFetching) return <Preloader/>

        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      unFollow={this.props.unFollow}
                      follow={this.props.follow}
                      toggleIsFetching={this.props.toggleIsFetching}
                      toggleIsFollowing={this.props.toggleFollowingInProgress}
                      followingInProgress={this.props.followingInProgress}
                      isAuth={this.props.isAuth}
        />
    }
}

let mapStateToProps = (state) => {
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
    connect(mapStateToProps, {
        unFollowSuccess,
        followSuccess,
        follow,
        unFollow,
        setCurrentPage,
        toggleIsFetching,
        toggleFollowingInProgress,
        requestUsers
    })
)
(UsersContainer)
