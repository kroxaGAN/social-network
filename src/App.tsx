import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs, DialogType, MessageType} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {PostType} from "./components/profile/MyPosts/MyPosts";

export type FriendType={
    id: number, name: string, avatar:string
}

export type StateType = {
    profilePage: {
        posts: PostType[]
    },
    dialogsPage: { messages: MessageType[],dialogs: DialogType[]
    },
    sideBar:{friends:FriendType[]}
}
export type AppPropsType = {
    state: StateType,
    addPost:(postMessage:string)=>void
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sideBar}/>
            <div className={"app-wrapper-content"}>
                <Route path={'/dialogs'} render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path={'/profile'} render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>

        </div>
    );
}

export default App;
