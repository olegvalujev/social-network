
import * as React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, setUserProfile} from "../../redux/ProfileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'} />
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
export default compose(
    connect(mapStateToProps,{setUserProfile, getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)