import {profileType} from "../../../redux/store";
import React from "react";
import {useFormik} from 'formik';
import s from "./ProfileDataForm.module.css";

export type ValuesProfileType = {
    fullName: string;
    lookingForAJobDescription: string;
    lookingForAJob: boolean;
    aboutMe: string;
    github: string;
    vk:string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
}
export const ProfileDataForm = (props: { profile: profileType, setEditMode: (editMode: boolean) => void,
    saveUser: (profileData: ValuesProfileType, setStatus:()=>void) => any }) => {
    const formik = useFormik({
        initialValues: {
            fullName: props.profile.fullName,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            lookingForAJob: props.profile.lookingForAJob,
            aboutMe: "About me",
            github: props.profile.contacts.github,
            vk: props.profile.contacts.vk,
            facebook: props.profile.contacts.facebook,
            instagram: props.profile.contacts.instagram,
            twitter: props.profile.contacts.twitter,
            website: props.profile.contacts.website,
            youtube: props.profile.contacts.youtube,
            mainLink: props.profile.contacts.mainLink,
        },
        onSubmit: (values: ValuesProfileType, submitProps) => {
            const profileData = {
                ...values,
                userId: props.profile.userId,
                contacts: {
                    github: values.github,
                    vk: values.vk,
                    facebook: values.facebook,
                    instagram: values.instagram,
                    twitter: values.twitter,
                    website: values.website,
                    youtube: values.youtube,
                    mainLink: values.mainLink,
                }
            }
            props.saveUser(profileData, submitProps.setStatus)
                .then(()=>{
                    props.setEditMode(false)
                })
                .catch(()=>{

                })
            // console.log(formik.status.error)
            // if(formik.status){
            //     console.log(formik.status.error)
            // }else {props.setEditMode(false)}
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
                    <b>Contacts</b>:{
                    <div className={s.contacts}>
                        <div>
                            <b>github</b>:
                            <input
                                name="github"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.github}
                            />
                        </div>
                        <div>
                            <b>vk</b>:
                            <input
                                name="vk"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.vk}
                            />
                        </div>
                        <div>
                            <b>facebook</b>:
                            <input
                                name="facebook"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.facebook}
                            />
                        </div>
                        <div>
                            <b>instagram</b>:
                            <input
                                name="instagram"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.instagram}
                            />
                        </div>
                        <div>
                            <b>twitter</b>:
                            <input
                                name="twitter"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.twitter}
                            />
                        </div>
                        <div>
                            <b>website</b>:
                            <input
                                name="website"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.website}
                            />
                        </div>
                        <div>
                            <b>youtube</b>:
                            <input
                                name="youtube"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.youtube}
                            />
                        </div>
                        <div>
                            <b>mainLink</b>:
                            <input
                                name="mainLink"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.mainLink}
                            />
                        </div>

                    </div>

                }
                </div>
                <div className={s.error}>
                    {formik.status && formik.status.error.map((er: any, index: any) => <p key={index}>{er}</p>)}
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}


