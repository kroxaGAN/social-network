import React from "react";
import s from './ProfileInfo.module.css'
import {profileType} from "../../../redux/store";
import {Preloader} from "../../Common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus";

type ProfileInfoPropsType={
    profile:profileType
    status:string
    updateUserStatus:()=>void
}

export const ProfileInfo = (props:ProfileInfoPropsType) => {
    if (!props.profile){
        return <Preloader/>
    }
       return <>
        <div className={s.imgWrapper}>
            <img
                src={'https://images.unsplash.com/photo-1574217013471-c32c6846cef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm90b3xlbnwwfHwwfHw%3D&w=1000&q=80'}
                alt={'logo'}/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
            <img src={props.profile.photos.large} alt={"img"}/>
            <h3>{props.profile.fullName}</h3>
            <div>
                <input type="checkbox" value={"ищу работу"} checked={props.profile.lookingForAJob}/>
                    ищу работу
            </div>
            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            <input type={"text"} value={props.profile.lookingForAJobDescription}/>

        </div>
    </>
}
