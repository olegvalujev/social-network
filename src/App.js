import './App.css';
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>

                        <Route path="/profile/:userId?">
                            <ProfileContainer />
                        </Route>
                        <Route path="/dialogs">
                            <DialogsContainer />
                        </Route>
                        <Route path="/users">
                            <UsersContainer />
                        </Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;
