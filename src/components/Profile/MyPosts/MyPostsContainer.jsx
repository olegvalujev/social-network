import React from "react";
import {actions} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts

    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => {
            dispatch(actions.addPost(newPostBody))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)
