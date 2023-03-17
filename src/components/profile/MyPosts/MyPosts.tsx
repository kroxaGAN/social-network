import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import { PostType} from "../../../redux/store";

type MyPostsProps={
    posts:PostType[],
    addPost:()=>void,
    newPostText:string,
    updateNewPostText:(text:string)=>void
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
            props.addPost()
    }
    const onPostChange=()=>{
        const text=newPostElement.current?.value
        if(text){
            props.updateNewPostText(text)
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

