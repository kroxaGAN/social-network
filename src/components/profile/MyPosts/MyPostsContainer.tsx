import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext/storeContext";

type MyPostsProps={
    // store:StoreType
    // posts:PostType[],
    // addPost:()=>void,
    // newPostText:string,
    // updateNewPostText:(text:string)=>void
    // dispatch:(action:ActionType)=>void
}


export const MyPostsContainer = (props:MyPostsProps) => {

    return (
        <StoreContext.Consumer>
            {
                (store)=>{
                    const onAddPost=()=>{
                        store.dispatch(addPostAC())
                    }
                    const onPostChange=(text:string)=>{
                        store.dispatch(updateNewPostTextAC(text))
                    }

                    return (
                        <MyPosts
                            addPost={onAddPost}
                            updateNewPostText={onPostChange}
                            posts={store.getState().profilePage.posts}
                            newPostText={store.getState().profilePage.newPostText}/>
                    )
                }
            }


        </StoreContext.Consumer>



    )
}

