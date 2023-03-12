import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export type PostType={
    id: number, message: string, countLikes: number
}
type MyPostsProps={
    posts:PostType[],
    addPost:(postMessage:string)=>void
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
        console.log(newPostElement.current?.value)
        if (newPostElement.current?.value){
            props.addPost(newPostElement.current?.value)
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                    >add post</textarea>

                </div>
                <button onClick={addPost}>Add new post</button>
            </div>
            {postsElements}
        </div>
    )
}

