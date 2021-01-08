import * as React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {auth, setAuthUserData} from "../../redux/AuthReducer";
import axios from "axios";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.auth()
    }

    render(){
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData, auth})(HeaderContainer);