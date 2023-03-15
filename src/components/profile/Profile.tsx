import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, PostType} from "../../redux/store";

type ProfilePropsType={
    profilePageState:{posts:PostType[], newPostText:string}
    // addPost:()=>void,
    // updateNewPostText:(text:string)=>void,
    dispatch:(action:ActionType)=>void
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div className={s.content}>
            Main content
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePageState.posts}
                // addPost={props.addPost}
                newPostText={props.profilePageState.newPostText}
                // updateNewPostText={props.updateNewPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

