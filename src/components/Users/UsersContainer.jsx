import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/UsersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)
export default UsersContainer