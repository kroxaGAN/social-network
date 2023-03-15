import {sideBarType} from "./store";

const initialSideBarState={
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

export const sideBarReducer=(state:sideBarType=initialSideBarState,action:any)=>{

    return state
}
