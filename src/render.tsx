import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App, {StateType} from "./App";
import {addPost} from "./redux/state";


export let rerenderEntireTree=(state:StateType)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
    </BrowserRouter>,
    document.getElementById('root')
);
}
