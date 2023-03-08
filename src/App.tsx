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

function App() {
  return (
    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className={"app-wrapper-content"}>
                <Route path={'/dialogs'} component={Dialogs} />
                <Route path={'/profile'} component={Profile} />
                <Route path={'/news'} component={News} />
                <Route path={'/music'} component={Music} />
                <Route path={'/settings'} component={Settings} />
        </div>

    </div>
  );
}

export default App;
