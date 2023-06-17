import React from "react";
import {addNewPostAC, addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

type MyPostsProps={
    // store:StoreType
    // posts:PostType[],
    // addPost:()=>void,
    // newPostText:string,
    // updateNewPostText:(text:string)=>void
    // dispatch:(action:ActionType)=>void
}


// export const _MyPostsContainer = (props:MyPostsProps) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store)=>{
//                     const onAddPost=()=>{
//                         store.dispatch(addPostAC())
//                     }
//                     const onPostChange=(text:string)=>{
//                         store.dispatch(updateNewPostTextAC(text))
//                     }
//
//                     return (
//                         <MyPosts
//                             addPost={onAddPost}
//                             updateNewPostText={onPostChange}
//                             posts={store.getState().profilePage.posts}
//                             newPostText={store.getState().profilePage.newPostText}/>
//                     )
//                 }
//             }
//
//
//         </StoreContext.Consumer>
//
//
//
//     )
// }

const mapStateToProps=(state:any)=>{
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps=(dispatch:any)=>{
    return {
        addPost:()=>{
            dispatch(addPostAC())
        },
        updateNewPostText:(text:string)=>{
            dispatch(updateNewPostTextAC(text))
        },
        addNewPostAC:(post:string)=>{
            dispatch(addNewPostAC(post))
        }
    }
}

export const MyPostsContainer =connect(mapStateToProps,mapDispatchToProps)(MyPosts)
