import React from "react";
import {Profile} from './Profile'
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

export const ProfilePage: React.FC = () => {

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    if (!isAuth) return <Redirect to={'/login'}/>
    return <Profile />
}


