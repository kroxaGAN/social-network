import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType={
    // profilePageState:{posts:PostType[], newPostText:string}
    // dispatch:(action:ActionType)=>void
    // store:StoreType
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div className={s.content}>
            Main content
            <ProfileInfo/>
            {/*<MyPostsContainer*/}
            {/*    posts={props.profilePageState.posts}*/}
            {/*    newPostText={props.profilePageState.newPostText}*/}
            {/*    dispatch={props.dispatch}*/}
            {/*/>*/}
            <MyPostsContainer />
            {/*<MyPostsContainer store={props.store}/>*/}

        </div>
    )
}

