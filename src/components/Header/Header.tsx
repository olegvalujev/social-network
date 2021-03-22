import React from 'react';
import s from './Header.module.css';
import {Link} from "react-router-dom";
import {Avatar, Button, Col, Menu, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {Header} from "antd/es/layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {getIsAuth, getLogin} from "../../redux/auth-selectors";

export const AppHeader: React.FC = () => {
    const isAuth = useSelector(getIsAuth)
    const login = useSelector(getLogin)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
    }
    return <Header className="header">
        <Row>
            <Col span={16}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><Link to='/developers'>Developers</Link></Menu.Item>
                </Menu>
            </Col>

            {isAuth ? <div>
                    <Col span={2}>
                        <Avatar alt={login || ''} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                    </Col>
                    <Col span={4}>
                        <Button onClick={onLogout}>Logout</Button>
                    </Col>
                </div>
                : <Col span={6}>
                    <Button>
                        <Link to={'/login'} className={s.login}>Login</Link>
                    </Button>
                </Col>}
        </Row>
    </Header>
}