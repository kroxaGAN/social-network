import {ActionType, profilePageType} from "./state";


export const profileReducer=(state:profilePageType,action:ActionType)=> {

    switch (action.type) {
        case "ADD-POST": {
            let newPost = {id: 4, message: state.newPostText, countLikes: 0}
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }
        case "UPDATE-NEW-POST-TEXT": {
            state.newPostText = action.text
            return state
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
