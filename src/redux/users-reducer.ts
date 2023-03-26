export type userType = {
    // id: number, avatarUrl:string, followed: boolean, fullName: string, status: string, locathion: { city: string, country: string }
    name: string,
    id: number,
    uniqueUrlName: string,
    photos: {
        small: string,
        large: string
    },
    status: string,
    followed: boolean
}
export type inithialStateType = {
    users: userType[],
    pageSize:number,
    totalUsersCount:number,
    currentPage:number,
    isFetching:boolean
}

const inithialState = {
    users: [
        // {id: 1, avatarUrl:'https://cdnn21.img.ria.ru/images/07e4/03/02/1566633996_0:266:1080:1076_1920x0_80_0_0_c60985b45734985e191faa1d42cf7faa.jpg', followed: false, fullName: 'Dima', status: 'Boss', locathion: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, avatarUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Kaikov_Andrey.jpg/640px-Kaikov_Andrey.jpg', followed: true, fullName: 'Andrei', status: 'worker', locathion: {city: 'Stolb', country: 'Belarus'}},
        // {
        //     id: 3,
        //     avatarUrl:'https://www.kino-teatr.ru/acter/photo/3/5/7453/649586.jpg',
        //     followed: false,
        //     fullName: 'Diana',
        //     status: 'superBoss',
        //     locathion: {city: 'Vilnius', country: 'Litva'}
        // },
    ],
    pageSize:10,
    totalUsersCount:10,
    currentPage:1,
    isFetching:false
}

export const usersReducer = (state: inithialStateType = inithialState, action: usersActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map((el) => {
                    return (
                        el.id === action.userId ? {...el, followed: true} : el
                    )
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((el) => {
                    return (
                        el.id === action.userId ? {...el, followed: false} : el
                    )
                })
            }
        case 'SET-USERS':
            return {...state, users: [ ...action.users]}
            // return {...state, users: [...state.users, ...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage:action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':{
            return {...state,totalUsersCount:action.count}
        }
        case 'TOGGLE-IS-FETCHING':{
            return {...state, isFetching:action.value}
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW", userId
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW", userId
    } as const
}
export const setUsersAC = (users: userType[]) => {
    return {
        type: 'SET-USERS', users
    } as const
}
export const setCurrentPageAC=(currentPage:number)=>{
    return{
        type:'SET-CURRENT-PAGE', currentPage: currentPage
    }as const
}
export const setTotalUsersCountAC=(count:number)=>{
    return{
        type:'SET-TOTAL-USERS-COUNT',count
    }as const
}
export const toggleIsFetchingAC=(value:boolean)=>{
    return {
        type:'TOGGLE-IS-FETCHING',value
    }as const
}


type usersActionType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUsersCountAC> | ReturnType<typeof toggleIsFetchingAC>
