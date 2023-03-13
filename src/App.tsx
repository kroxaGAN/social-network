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

export type FriendType = {
    id: number, name: string, avatar: string
}

export type StateType = {
    profilePage: {
        posts: PostType[],
        newPostText: string
    },
    dialogsPage: {
        messages: MessageType[],
        dialogs: DialogType[],
        newDialogText:string
    },
    sideBar: { friends: FriendType[] }
}
export type AppPropsType = {
    state: StateType,
    addPost: () => void,
    updateNewPostText:(text:string)=>void
    addNewMessageText:(text:string)=>void
    addMessage:()=>void
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sideBar}/>
            <div className={"app-wrapper-content"}>
                <Route path={'/dialogs'} render={() => <Dialogs
                    dialogsPageState={props.state.dialogsPage}
                    addNewMessageText={props.addNewMessageText}
                    addMessage={props.addMessage}
                />}/>
                <Route path={'/profile'} render={() => <Profile
                    profilePageState={props.state.profilePage}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>

        </div>
    );
}

export default App;
