import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";

type MyPostsProps={
    store:StoreType
    // posts:PostType[],
    // addPost:()=>void,
    // newPostText:string,
    // updateNewPostText:(text:string)=>void
    // dispatch:(action:ActionType)=>void
}


export const MyPostsContainer = (props:MyPostsProps) => {


    const onAddPost=()=>{
        props.store.dispatch(addPostAC())
    }
    const onPostChange=(text:string)=>{
            props.store.dispatch(updateNewPostTextAC(text))
    }
    return (
        <MyPosts
            addPost={onAddPost}
            updateNewPostText={onPostChange}
            posts={props.store.getState().profilePage.posts}
            newPostText={props.store.getState().profilePage.newPostText}/>
    )
}

