import React from "react";
import s from "./Post.module.css"

export const Post = () => {
    return <div className={s.content}>
        <div>
            <div>

                <div className={s.item}>
                    <img src={'https://trikky.ru/wp-content/blogs.dir/1/files/2020/08/17/2859972401.jpg'} alt={"ava"}/>
                    post1
                    <div>
                        <span>like</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
}
