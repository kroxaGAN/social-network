import {addNewPostAC, deletePostAC, profileReducer} from "./profile-reducer";
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


it ('Length of posts should be incremented',()=>{

    let action=addNewPostAC('Hello my friend')
    const newState= profileReducer(initialProfileState,action)

    expect(newState.posts.length).toBe(4)
})
it ('Message of new post should be correct',()=>{

    let action=addNewPostAC('Hello my friend')
    const newState= profileReducer(initialProfileState,action)

    expect(newState.posts[3].message).toBe('Hello my friend')
})
it ('After deleted length of messages should be decrement',()=>{
    const postId=2
    let action=deletePostAC(postId)
    const newState= profileReducer(initialProfileState,action)

    expect(newState.posts.length).toBe(2)
})
it ('After deleted length of messages should not be decrement if id is incorrect',()=>{
    const postId=100
    let action=deletePostAC(postId)
    const newState= profileReducer(initialProfileState,action)

    expect(newState.posts.length).toBe(3)
})



