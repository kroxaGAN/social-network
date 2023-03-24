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
type inithialStateType = {
    users: userType[],
    pageSize:number,
    totalUsersCount:number,
    currentPage:number
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
    pageSize:5,
    totalUsersCount:15,
    currentPage:2
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
            return {...state, users: [...state.users, ...action.users]}
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

type usersActionType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>
