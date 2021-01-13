import React from "react";
import {addDialogPostActionCreator, updateNewMessageTextActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addDialogPostActionCreator())
        },
        updateMessage: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)