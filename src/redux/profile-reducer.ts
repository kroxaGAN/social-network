import {ActionType, profilePageType} from "./store";

const initialProfileState={
    posts: [
        {id: 1, message: 'Hello my friend', countLikes: 15},
        {id: 2, message: "It\'s first commit", countLikes: 25},
        {id: 3, message: 'Yeee', countLikes: 1},
    ],
    newPostText: "it-kamasutra"
}


export const profileReducer=(state:profilePageType=initialProfileState,action:ActionType)=> {

    switch (action.type) {
        case "ADD-POST": {
            let newPost = {id: 4, message: state.newPostText, countLikes: 0}
            const copyState={...state}
            copyState.posts.push(newPost)
            copyState.newPostText = ''
            return copyState
        }
        case "UPDATE-NEW-POST-TEXT": {
            const copyState={...state}
            copyState.newPostText = action.text
            return copyState
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
