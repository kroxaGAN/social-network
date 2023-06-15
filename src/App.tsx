import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

export type AppPropsType = {
    // store: StoreType
    // state: RootStateType,
    // addPost: () => void,
    // updateNewPostText: (text: string) => void
    // addNewMessageText: (text: string) => void
    // addMessage: () => void
    // dispatch:(action:ActionType)=>void
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavbarContainer/>
            {/*<Navbar state={props.store.getState().sideBar}/>*/}
            <div className={"app-wrapper-content"}>
                <Route path={'/dialogs'} render={() => <DialogsContainer
                    // store={props.store}
                    // dialogsPageState={props.store.getState().dialogsPage}
                    // addNewMessageText={props.addNewMessageText}
                    // addMessage={props.addMessage}
                    // dispatch={props.store.dispatch}
                />}/>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer
                    // store={props.store}
                    // profilePageState={props.state.profilePage}
                    // addPost={props.addPost}
                    // updateNewPostText={props.updateNewPostText}
                    // dispatch={props.dispatch}
                />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/login'} render={() => <LoginContainer/>}/>
            </div>

        </div>
    );
}

export default App;
