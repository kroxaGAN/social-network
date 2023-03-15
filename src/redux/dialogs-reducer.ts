import {ActionType, dialogsPageType} from "./state";

export const dialogsReducer = (state: dialogsPageType, action: ActionType) => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            const newMessage = {id: 4, message: state.newDialogText}
            state.messages.push(newMessage)
            state.newDialogText = ''
            return state
        }
        case "ADD-NEW-MESSAGE-TEXT": {
            state.newDialogText = action.text
            return state
        }
        default:
            return state
    }
}

export const addMessageAC = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}
export const addNewMessageTextAC = (text: string) => {
    return {
        type: "ADD-NEW-MESSAGE-TEXT", text
    } as const
}
