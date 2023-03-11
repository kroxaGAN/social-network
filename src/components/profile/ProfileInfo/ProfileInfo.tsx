import React from "react";
import s from './ProfileInfo.module.css'

type ProfileInfoPropsType={
}

export const ProfileInfo = (props:ProfileInfoPropsType) => {
    return <>
        <div>
            <img
                src={'https://images.unsplash.com/photo-1574217013471-c32c6846cef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm90b3xlbnwwfHwwfHw%3D&w=1000&q=80'}
                alt={'logo'}/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </>
}
