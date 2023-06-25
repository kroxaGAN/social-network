import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {profileType} from "../../../redux/store";
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "../ProfileStatusWithHooks";
import defPhoto from "../../../Isses/Images/defPhoto.png"
import {ProfileDataForm, ValuesProfileType} from "./ProfileDataForm";

type ProfileInfoPropsType = {
    profile: profileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhotos: (file: any) => void
    saveUser:(profileData:ValuesProfileType)=>void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    const [editMode,setEditMode]=useState<boolean>(false)
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            // console.log(e.currentTarget.files[0])
            props.savePhotos(e.currentTarget.files[0])
        }
    }
    return <>
        <div className={s.imgWrapper}>
            <img
                src={'https://images.unsplash.com/photo-1574217013471-c32c6846cef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm90b3xlbnwwfHwwfHw%3D&w=1000&q=80'}
                alt={'logo'}/>
        </div>
        <div className={s.descriptionBlock}>
            <div>
                ava + description
            </div>
            <img src={props.profile.photos.large || defPhoto} alt={"img"} className={s.mainPhoto}/>
            <div>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            </div>

            {editMode
                ?<ProfileDataForm profile={props.profile} setEditMode={setEditMode} saveUser={props.saveUser}/>
                :<ProfileData profile={props.profile} setEditMode={setEditMode} isOwner={props.isOwner}/>  }
            <div>
                {/*lookingForAJobDescription*/}
            </div>
            <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            {/*<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>*/}

        </div>
    </>
}

const ProfileData=(props:{profile:profileType,setEditMode:(editMode:boolean)=>void, isOwner:boolean})=>{
    return <div>
        <span>
            <b>Full name</b>: {props.profile.fullName}
            {props.isOwner && <button onClick={()=>{props.setEditMode(true)}}>Edit</button>}
        </span>
        <div>
            <b>Lookig for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        <div>
            {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills</b> : {props.profile.lookingForAJobDescription}
            </div>

            }
        </div>
        <div>
            <b>Contacts</b>:{Object.keys(props.profile.contacts).map((key:string) => {
            //@ts-ignore
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>

        {/*<input type="checkbox" value={"ищу работу"} checked={props.profile.lookingForAJob}/>*/}


    </div>
}

const Contact = (props: { contactTitle: string , contactValue: string  }) => {
    return (
        <div className={s.contact}>
            <b>{props.contactTitle}</b>: {props.contactValue === "" ? '-----' : props.contactValue}
        </div>
    )

}
