import {ActionType, profilePageType} from "./store";

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
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "ищу и дурачусь",
        "fullName": "samurai d",
        "userId": 200000000,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    }
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
        case "UPDATE-NEW-POST-TEXT": {
            const copyState={...state}
            copyState.newPostText = action.text
            return copyState
        }
        case "SET-USER-PROFILE":{
            return {...state,profile:action.profile}
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
export const setUserProfileAC=(profile:any)=>{
    return{
        type:"SET-USER-PROFILE", profile
    }as const
}
