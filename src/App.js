import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

const App = (props) => {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>

                        <Route path="/profile">
                            <Profile state={props.state.profilePage} addPost={props.addPost}/>
                        </Route>
                        <Route path="/dialogs">
                            <Dialogs state={props.state.dialogsPage}/>
                        </Route>

                    </Switch>
                </div>
            </div>
        </Router>

    );
}


export default App;
