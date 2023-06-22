import React from 'react';
import './index.css';
import App from "./App";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import { Provider } from 'react-redux';

// let rerenderEntireTree = () => {

    ReactDOM.render(
        <HashRouter>
        <Provider store={store}>
            <App
                // store={store}
                // state={store.getState()}
                //  dispatch={store.dispatch.bind(store)}
                // addPost={store.addPost.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}
                // addNewMessageText={store.addNewMessageText.bind(store)}
                // addMessage={store.addMessage.bind(store)}
            />
        </Provider>

        </HashRouter>,
        document.getElementById('root')
    );
// }


// rerenderEntireTree()
//
// store.subscribe(rerenderEntireTree)

