import React from "react";
import s from "./Profile.module.css"

export const Profile=()=>{
    return <div className={s.content}>
        Main content
        <div>
            <img src={'https://images.unsplash.com/photo-1574217013471-c32c6846cef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm90b3xlbnwwfHwwfHw%3D&w=1000&q=80'} alt={'logo'}/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <div className={s.item}>post1</div>
                <div className={s.item}>post2</div>
                <div className={s.item}>post3</div>
            </div>

        </div>
    </div>
}
