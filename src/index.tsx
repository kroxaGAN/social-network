import React from 'react';
import './index.css';
import App from "./App";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";

let rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>

            <App
                store={store}
                // state={store.getState()}
                //  dispatch={store.dispatch.bind(store)}
                // addPost={store.addPost.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}
                // addNewMessageText={store.addNewMessageText.bind(store)}
                // addMessage={store.addMessage.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree()

store.subscribe(rerenderEntireTree)

