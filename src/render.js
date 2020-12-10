import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost} from "./redux/state";

const reRenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default reRenderEntireTree