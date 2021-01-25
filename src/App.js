import React, {Suspense} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/profile/:userId?">
                            <Suspense fallback={<Preloader/>}>
                                <ProfileContainer/>
                            </Suspense>
                        </Route>
                        <Route path="/dialogs">
                            <Suspense fallback={<Preloader/>}>
                                <DialogsContainer/>
                            </Suspense>
                        </Route>
                        <Route path="/users">
                            <Suspense fallback={<Preloader/>}>
                                <UsersContainer/>
                            </Suspense>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App)

const ProjectContainer = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default ProjectContainer