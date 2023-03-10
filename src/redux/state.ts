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
export type profilePageType = {
    posts: PostType[],
    newPostText: string
}
export type dialogsPageType = {
    messages: MessageType[],
    dialogs: DialogType[],
    newDialogText: string
}
export type sideBarType={
    friends:FriendType[]
}
export type RootStateType={
    profilePage: profilePageType,
    dialogsPage:dialogsPageType,
    sideBar: sideBarType
}

let rerenderEntireTree = (state: RootStateType) => {
    console.log("render", state)
}

export let state:RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello my friend', countLikes: 15},
            {id: 2, message: "It\'s first commit", countLikes: 25},
            {id: 3, message: 'Yeee', countLikes: 1},
        ],
        newPostText: "it-kamasutra"
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
            {id: 1, name: 'Kostia', avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png"},
            {id: 2, name: 'Vera', avatar: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"},
            {id: 3, name: 'Yulia', avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914_960_720.png"}
        ]
    }
}
export let addPost = () => {
    let newPost = {id: 4, message: state.profilePage.newPostText, countLikes: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export const updateNewPostText = (text: string) => {
    state.profilePage.newPostText = text
    rerenderEntireTree(state)
}
export const addNewMessageText = (text: string) => {
    state.dialogsPage.newDialogText = text
    rerenderEntireTree(state)
}
export const addMessage = () => {
    const newMessage = {id: 4, message: state.dialogsPage.newDialogText}
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newDialogText = ''
    rerenderEntireTree(state)
}

export const subscibe = (observer: (state: RootStateType) => void) => {
    rerenderEntireTree = observer
}
