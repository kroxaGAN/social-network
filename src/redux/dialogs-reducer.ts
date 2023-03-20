import {ActionType, dialogsPageType} from "./store";

const initialDialogsState={
    messages: [
        {id: 1, message: 'Helloooy'},
        {id: 2, message: 'it good'},
        {id: 3, message: 'very good'},
    ],
    dialogs: [
        {id: 1, name: 'Dima', avatar: "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"},
        {
            id: 2,
            name: 'Andreu',
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3xq6yMAh7HKpnLoT17HDDvOIAJb0u98jPw&usqp=CAU"
        },
        {
            id: 3,
            name: 'Valeiy',
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSjkWNYkyTK94NswJwN5f4kUJ7eQMn2GJ7w&usqp=CAU"
        }
    ],
    newDialogText: "hi Broo"
}

export const dialogsReducer = (state: dialogsPageType=initialDialogsState, action: ActionType) => {
    let stateCopy;
    switch (action.type) {
        case "ADD-MESSAGE": {
            const newMessage = {id: 4, message: state.newDialogText}
            stateCopy={...state,newDialogText:'',messages:[...state.messages,newMessage]}
            return stateCopy
        }
        case "ADD-NEW-MESSAGE-TEXT": {
            stateCopy={...state,newDialogText:action.text}
            return stateCopy
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
