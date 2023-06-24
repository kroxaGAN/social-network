import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {profileType} from "../../redux/store";
import {ValuesProfileType} from "./ProfileInfo/ProfileDataForm";

type ProfilePropsType = {
    // profilePageState:{posts:PostType[], newPostText:string}
    // dispatch:(action:ActionType)=>void
    // store:StoreType
    profile: profileType
    status: string
    isOwner: boolean
    isAuth:boolean
    updateUserStatus:(status:string)=>void
    savePhotos:()=>void
    saveUser:(profileData:ValuesProfileType)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            Main content
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
                isOwner={props.isOwner}
                savePhotos={props.savePhotos}
                saveUser={props.saveUser}
            />

            {/*<MyPostsContainer*/}
            {/*    posts={props.profilePageState.posts}*/}
            {/*    newPostText={props.profilePageState.newPostText}*/}
            {/*    dispatch={props.dispatch}*/}
            {/*/>*/}
            {props.isAuth && <MyPostsContainer/>}
            {!props.isAuth && <h1>Выполни вход</h1>}
            {/*<MyPostsContainer store={props.store}/>*/}

        </div>
    )
}

