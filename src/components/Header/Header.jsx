import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={ s.header }>
            <img src='https://cdn.pixabay.com/photo/2020/11/24/17/54/australian-shepherd-5773397_1280.jpg' alt='header'/>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;