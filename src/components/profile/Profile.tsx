import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType={
    // profilePageState:{posts:PostType[], newPostText:string}
    // dispatch:(action:ActionType)=>void
    // store:StoreType
}

export const Profile = (props:any) => {
    return (
        <div className={s.content}>
            Main content
            <ProfileInfo  profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            {/*<MyPostsContainer*/}
            {/*    posts={props.profilePageState.posts}*/}
            {/*    newPostText={props.profilePageState.newPostText}*/}
            {/*    dispatch={props.dispatch}*/}
            {/*/>*/}
            {props.isAuth && <MyPostsContainer />}
            {!props.isAuth && <h1>Выполни вход</h1>}
            {/*<MyPostsContainer store={props.store}/>*/}

        </div>
    )
}

