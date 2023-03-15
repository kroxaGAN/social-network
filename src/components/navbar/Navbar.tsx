import React from "react";
import s from "./Navbar.module.css"
import { NavLink } from "react-router-dom";
import {Friend} from "../Friend/Friend";
import {FriendType} from "../../redux/store";

type NavbarPropsType={
    state:{friends:FriendType[]}
}

export const Navbar = (props:NavbarPropsType) => {
    const classForItem = `${s.item} ${s.active}`
    return (
        <nav className={s.nav}>
            <div className={classForItem}>
                <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={classForItem}>
                <NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={classForItem}>
                <NavLink to={'/news'} activeClassName={s.active}>News</NavLink>
            </div>
            <div className={classForItem}>
                <NavLink to={'/music'} activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={classForItem}>
                <NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink>
            </div>
            <div >
                <div className={s.classForFriends}>
                    Friends
                </div>
                <div className={s.friendsWrapper}>
                    {props.state.friends.map(fr=>(
                         <Friend name={fr.name} avatar={fr.avatar}/>
                    ))}

                </div>
            </div>
        </nav>
    )
}
