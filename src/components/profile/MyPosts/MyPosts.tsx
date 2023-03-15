import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionType, PostType} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

type MyPostsProps={
    posts:PostType[],
    // addPost:()=>void,
    newPostText:string,
    // updateNewPostText:(text:string)=>void
    dispatch:(action:ActionType)=>void
}


export const MyPosts = (props:MyPostsProps) => {

    let postsElements=props.posts.map(p =>
         <Post
            key={p.id}
            message={p.message}
            countLikes={p.countLikes}
        />
    )

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost=()=>{
        // const inputData:any=document.getElementById('new-post')?.value
        //     props.addPost()
        // props.dispatch({type:"ADD-POST"})
        props.dispatch(addPostAC())
    }
    const onPostChange=()=>{
        const text=newPostElement.current?.value
        if(text){
            // props.updateNewPostText(text)
            // props.dispatch({type:"UPDATE-NEW-POST-TEXT",text:text})
            props.dispatch(updateNewPostTextAC(text))
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}
                    />

                </div>
                <button onClick={addPost}>Add new post</button>
            </div>
            {postsElements}
        </div>
    )
}

