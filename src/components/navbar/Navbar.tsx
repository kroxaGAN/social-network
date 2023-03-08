import React from "react";
import s from "./Navbar.module.css"

export const Navbar = () => {
    const classForItem=`${s.item} ${s.active}`
    return <nav className={s.nav}>
        <div className={classForItem}>
            <a href={'/profile'}>Profile</a>
        </div>
        <div className={classForItem}>
            <a href={'/dialogs'}>Messages</a>
        </div>
        <div className={classForItem}>
            <a>News</a>
        </div>
        <div className={classForItem}>
            <a>Music</a>
        </div>
        <div className={classForItem}>
            <a>Settings</a>
        </div>
    </nav>
}
