import {
    addNewPostAC,
    addPostAC, deletePostAC,
    profileReducer, setUserPhoto,
    setUserProfileAC,
    setUserStatus,
    updateNewPostTextAC
} from "./profile-reducer";
import {addMessageAC, addMessageActionCreator, addNewMessageTextAC, dialogsReducer} from "./dialogs-reducer";
import {sideBarReducer} from "./sideBar-reducer";
import {deleteLogout, getCaptchaUrlSuccess, setAuthUserDataAC} from "./auth-reducer";
import {initializedSuccess} from "./app-reducer";

export type MessageType = {
    id: number, message: string
}
export type DialogType = {
    id: number, name: string, avatar: string
}
export type PostType = {
    id: number, message: string, countLikes: number
}
export type FriendType = {
    id: number, name: string, avatar: string
}

export type profileType = {

    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string,
        "github": string,
        "mainLink": string
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
}
export type profileUpdateType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": null,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": null,
        "github": string,
        "mainLink": null
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
}
export type profilePageType = {
    posts: PostType[],
    newPostText: string,
    profile: profileType,
    status: string
}
export type dialogsPageType = {
    messages: MessageType[],
    dialogs: DialogType[],
    newDialogText: string
}
export type sideBarType = {
    friends: FriendType[]
}
export type RootStateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType,
    sideBar: sideBarType
}


export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello my friend', countLikes: 15},
                {id: 2, message: "It\'s first commit", countLikes: 25},
                {id: 3, message: 'Yeee', countLikes: 1},
            ],
            newPostText: "it-kamasutra",
            profile: {
                "aboutMe": "я круто чувак 1001%",
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
                "lookingForAJobDescription": "не ищу, а дурачусь",
                "fullName": "samurai dimych",
                "userId": 2,
                "photos": {
                    "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                    "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
                }
            },
            status: ""
        },
        dialogsPage: {
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
        },
        sideBar: {
            friends: [
                {
                    id: 1,
                    name: 'Kostia',
                    avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png"
                },
                {
                    id: 2,
                    name: 'Vera',
                    avatar: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                },
                {
                    id: 3,
                    name: 'Yulia',
                    avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914_960_720.png"
                }
            ]
        }
    },
    _subscribe(state: RootStateType) {
        console.log("render", state)
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._subscribe = observer
    },

    // addPost() {
    //     let newPost = {id: 4, message: this._state.profilePage.newPostText, countLikes: 0}
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._subscribe(this._state)
    // },
    // updateNewPostText(text: string) {
    //     this._state.profilePage.newPostText = text
    //     this._subscribe(this._state)
    // },
    // addNewMessageText(text: string) {
    //     this._state.dialogsPage.newDialogText = text
    //     this._subscribe(this._state)
    // },
    // addMessage() {
    //     const newMessage = {id: 4, message: this._state.dialogsPage.newDialogText}
    //     this._state.dialogsPage.messages.push(newMessage)
    //     this._state.dialogsPage.newDialogText = ''
    //     this._subscribe(this._state)
    // },
    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)
        this._subscribe(this._state)

        // if (action.type === "ADD-POST") {
        //     let newPost = {id: 4, message: this._state.profilePage.newPostText, countLikes: 0}
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._subscribe(this._state)
        // } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        //     this._state.profilePage.newPostText = action.text
        //     this._subscribe(this._state)
        // } else if (action.type === "ADD-NEW-MESSAGE-TEXT") {
        //     debugger
        //     console.log("state: " + this._state)
        //     this._state.dialogsPage.newDialogText = action.text
        //     this._subscribe(this._state)
        // } else if (action.type === "ADD-MESSAGE") {
        //     const newMessage = {id: 4, message: this._state.dialogsPage.newDialogText}
        //     this._state.dialogsPage.messages.push(newMessage)
        //     this._state.dialogsPage.newDialogText = ''
        //     this._subscribe(this._state)
        // }
    }
}

export type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof addNewMessageTextAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deleteLogout>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof addNewPostAC>
    | ReturnType<typeof initializedSuccess>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setUserPhoto>
    | ReturnType<typeof getCaptchaUrlSuccess>

// window.store=store;
