import React from 'react';
import './index.css';
import App from "./App";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/state";

let rerenderEntireTree=()=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 addPost={store.addPost}
                 updateNewPostText={store.updateNewPostText}
                 addNewMessageText={store.addNewMessageText}
                 addMessage={store.addMessage}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree()

store.subscibe(rerenderEntireTree)

