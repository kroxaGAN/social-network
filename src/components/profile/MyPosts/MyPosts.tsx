import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export type PostType={
    id: number, message: string, countLikes: number
}
type MyPostsProps={
    posts:PostType[]
}


export const MyPosts = (props:MyPostsProps) => {
    // let posts = [
    //     {id: 1, message: 'Hello my friend', countLikes: 15},
    //     {id: 2, message: 'It\'s first commit', countLikes: 25},
    //     {id: 3, message: 'Yeee', countLikes: 1},
    // ]

    let postsElements=props.posts.map(p =>
         <Post
            key={p.id}
            message={p.message}
            countLikes={p.countLikes}
        />
    )
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>!!!</textarea>
                </div>
                <button>Add new post</button>
            </div>
            {postsElements}
        </div>
    )
}

