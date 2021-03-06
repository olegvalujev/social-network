import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={ s.header }>
            <h2 className={s.logoTitle}>Social Network</h2>
            <div className={s.loginBlock}>
                { props.isAuth
                    ? <div> {props.login} - <button onClick={props.logout}>Logout</button> </div>
                    : <NavLink to={'/login'} className={s.login}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;