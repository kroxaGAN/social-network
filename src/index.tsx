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
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 addNewMessageText={store.addNewMessageText.bind(store)}
                 addMessage={store.addMessage.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree()

store.subscibe(rerenderEntireTree)

