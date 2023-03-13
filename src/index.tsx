import React from 'react';
import './index.css';
import {
    addMessage,
    addNewMessageText,
    addPost,
    RootStateType,
    state,
    subscibe,
    updateNewPostText
} from "./redux/state";
import App from "./App";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree=(state:RootStateType)=>{
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


rerenderEntireTree(state)

subscibe(rerenderEntireTree)

