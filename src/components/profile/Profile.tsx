import React from "react";
import s from "./Profile.module.css"
import {MyPosts, PostType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType={
    state:{posts:PostType[]}
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div className={s.content}>
            Main content
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}

