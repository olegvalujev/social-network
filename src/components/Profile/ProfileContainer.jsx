
import * as React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatus, getUserProfile, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = this.props.authorizedUserId
            if (!userId) {
                //this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'} />
        return <Profile
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
        />
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})
export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps,{setUserProfile, getUserProfile, getStatus, updateStatus}),
)(ProfileContainer)