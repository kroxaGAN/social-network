import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";

export type AppPropsType = {
    state: RootStateType,
    addPost: () => void,
    updateNewPostText: (text: string) => void
    addNewMessageText: (text: string) => void
    addMessage: () => void
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
