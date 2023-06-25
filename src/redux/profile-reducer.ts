import {ActionType, profilePageType,  profileUpdateType} from "./store";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";

const initialProfileState={
    posts: [
        {id: 1, message: 'Hello my friend', countLikes: 15},
        {id: 2, message: "It\'s first commit", countLikes: 25},
        {id: 3, message: 'Yeee', countLikes: 1},
    ],
    newPostText: "it-kamasutra",
    profile:{
        "aboutMe": "я крут",
        "contacts": {
            "facebook": "facebook.com",
            "website": "null",
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": "null",
            "github": "github.com",
            "mainLink": "null"
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "ищу и дурачусь",
        "fullName": "samurai d",
        "userId": 200000000,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    status:""
}


export const profileReducer=(state:profilePageType=initialProfileState,action:ActionType)=> {

    switch (action.type) {
        case "ADD-POST": {
            let newPost = {id: 4, message: state.newPostText, countLikes: 0}
            const copyState={...state}
            copyState.posts=[...state.posts]
            copyState.posts.push(newPost)
            copyState.newPostText = ''
            return copyState
        }
        case "ADD_NEW_POST":{
            let newPost = {id: 4, message: action.post, countLikes: 0}
            const copyState={...state}
            copyState.posts=[...state.posts]
            copyState.posts.push(newPost)
            return copyState
        }
        case "UPDATE-NEW-POST-TEXT": {
            const copyState={...state}
            copyState.newPostText = action.text
            return copyState
        }
        case "SET-USER-PROFILE":{
            return {...state,profile:action.profile}
        }
        case "SET-USER-STATUS":{
            return{...state,status:action.status}
        }
        case "DELETE-POST":{
            return {
                ...state,
                posts:state.posts.filter(p=>p.id!==action.postId)
            }
        }
        case "SAVE-PHOTO":{
            return{
                ...state,
                profile:{...state.profile,photos:action.photos}
            }
        }
        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT", text
    } as const
}
export const addNewPostAC=(post:string)=>{
    return {
        type:"ADD_NEW_POST",
        post
    }as const
}
export const setUserProfileAC=(profile:any)=>{
    return{
        type:"SET-USER-PROFILE", profile: profile
    }as const
}
export const setUserStatus=(status:string)=>{
    return{
        type:'SET-USER-STATUS',status
    }as const
}
export const deletePostAC=(postId:number)=>{
    return{
        type:"DELETE-POST", postId
    }as const
}

export const setUserPhoto=(photos:any)=>{
    return{
        type:"SAVE-PHOTO",photos
    }as const
}

export const getUserProfile=(userId:number)=>async (dispatch:Dispatch)=>{
    const res=await userAPI.profile(userId)
            dispatch(setUserProfileAC(res.data))
}
export const getUserStatus=(userId:number)=>async (dispatch:Dispatch)=>{
    const response=await profileAPI.getStatus(userId)
            dispatch(setUserStatus(response.data))
}
export const updateUserStatus=(status:string)=>async (dispatch:Dispatch)=>{
    const response=await profileAPI.updateStatus(status)
            if (response.data.resultCode===0){
                dispatch(setUserStatus(status))
            }
}
export const savePhotos=(file:any)=>async (dispatch:Dispatch)=>{
    const response=await profileAPI.updatePhoto(file)
    if (response.data.resultCode===0){
        dispatch(setUserPhoto(response.data.data.photos))
    }
}
export const saveUser=(profileData:profileUpdateType, setStatus: any)=>async (dispatch:Dispatch)=>{
    const response=await profileAPI.saveUserData(profileData)
    if (response.data.resultCode===0){
        //@ts-ignore
    dispatch(getUserProfile(profileData.userId))
    }else {
        debugger
        setStatus({error: response.data.messages})
    }
}
