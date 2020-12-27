import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>

                        <Route path="/profile">
                            <Profile />
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
