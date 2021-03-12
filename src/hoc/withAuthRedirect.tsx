import React from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppStateType} from "../redux/redux-store";

let mapStateToAuthRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

type MapStateToPropsType = {
    isAuth: boolean
}

type DispatchPropsType = {}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<MapStateToPropsType & DispatchPropsType> = (props) => {
        let {isAuth, ...rest} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        return <WrappedComponent {...rest as unknown as WCP} />
    }

    return connect<MapStateToPropsType, DispatchPropsType, WCP, AppStateType>(mapStateToAuthRedirect, {})(RedirectComponent)
}