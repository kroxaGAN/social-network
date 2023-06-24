import {profileType} from "../../../redux/store";
import React from "react";
import {useFormik} from 'formik';
import s from "../../Login/Login.module.css";

export type ValuesProfileType = {
    fullName: string;
    lookingForAJobDescription: string;
    lookingForAJob: boolean;
    aboutMe:string
}
export const ProfileDataForm = (props: { profile: profileType, setEditMode: (editMode: boolean) => void, saveUser: (profileData: ValuesProfileType) => void }) => {
    const formik = useFormik({
        initialValues: {
            fullName: props.profile.fullName,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            lookingForAJob: props.profile.lookingForAJob,
            aboutMe:"About me"
        },
        onSubmit: (values: ValuesProfileType, submitProps) => {
            const profileData={
                ...values,
                userId: props.profile.userId,
                fullName: props.profile.fullName,
                contacts: {
                    github: '',
                    vk: '',
                    facebook: '',
                    instagram: '',
                    twitter: '',
                    website: '',
                    youtube: '',
                    mainLink: '',
                }
            }
            props.saveUser(profileData)
            props.setEditMode(false)
        }
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <b>Full name</b>:
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.fullName}
                    />
                </div>
                <div>
                    <b>Looking for a job</b>:
                    <input
                        name="lookingForAJob"
                        type="checkbox"
                        onChange={formik.handleChange}
                        checked={formik.values.lookingForAJob}
                    />
                </div>
                <div>
                    <b>My professional skills</b>:
                    <input
                        name="lookingForAJobDescription"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lookingForAJobDescription}
                    />
                </div>
                <div>
                    <b>About me</b>:
                    <input
                        name="aboutMe"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.aboutMe}
                    />
                </div>
                <div>
                    <b>Contacts</b>:{Object.keys(props.profile.contacts).map((key:string) => {
                    //@ts-ignore
                    // return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                    <div>
                        <b>{key}</b>:
                        <input
                            name="aboutMe"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.aboutMe}
                        />
                    </div>


                })}
                </div>
                <div className={s.error}>
                    {formik.status && formik.status.error.map((er: any, index: any) => <p key={index}>{er}</p>)}
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

const Contact = (props: { contactTitle: string , contactValue: string  }) => {
    return (
        <div className={s.contact}>
            <b>{props.contactTitle}</b>: {
            // props.contactValue ===null && '-----'
            <input/>
        }
        </div>
    )

}

