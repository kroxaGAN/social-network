import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App, {StateType} from "./App";
import {addMessage, addNewMessageText, addPost, updateNewPostText} from "./redux/state";


export let rerenderEntireTree=(state:StateType)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addNewMessageText={addNewMessageText}
                 addMessage={addMessage}
            />
    </BrowserRouter>,
    document.getElementById('root')
);
}
