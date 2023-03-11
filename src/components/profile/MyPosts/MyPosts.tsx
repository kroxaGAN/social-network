import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
            <div className={s.postsBlock}>
               <h3>My posts</h3>
                <div>
                    <div>
                        <textarea>!!!</textarea>
                    </div>
                    <button>Add new post</button>
                </div>
                <Post message={"Hello my friend"} countLikes={15}/>
                <Post message={"It's first commit"} countLikes={20}/>
                <Post message={"Yeee"} countLikes={1}/>
            </div>
    )}

