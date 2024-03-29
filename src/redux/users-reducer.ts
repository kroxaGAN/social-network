import {Dispatch} from "redux";
import {userAPI} from "../api/api";

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
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
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
    pageSize: 10,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: inithialStateType = inithialState, action: usersActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                // users:updateObjectsInArray(state.users,action.userId,"id",{followed: true})
                users: state.users.map((el) => {
                    return (
                        el.id === action.userId ? {...el, followed: true} : el
                    )
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                // users:updateObjectsInArray(state.users,action.userId,"id",{followed: false})
                users: state.users.map((el) => {
                    return (
                        el.id === action.userId ? {...el, followed: false} : el
                    )
                })
            }
        case 'SET-USERS':
            return {...state, users: [...action.users]}
        // return {...state, users: [...state.users, ...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.count}
        }
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.value}
        }
        case "TOGGLE-IS-FOLLOWING-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId: number) => {
    return {
        type: "FOLLOW", userId
    } as const
}
export const unFollowSuccess = (userId: number) => {
    return {
        type: "UNFOLLOW", userId
    } as const
}
export const setUsers = (users: userType[]) => {
    return {
        type: 'SET-USERS', users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE', currentPage: currentPage
    } as const
}
export const setTotalUsersCount = (count: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT', count
    } as const
}
export const setToggleFetching = (value: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING', value
    } as const
}
export const setFollowingInProgress = (userId: number, isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS",
        userId, isFetching
    } as const
}

export const requestUsers = (pageSize: number, currentPage: number) => async (dispatch: Dispatch) => {
    dispatch(setToggleFetching(true))
    const data = await userAPI.getUsers(pageSize, currentPage)
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(setUsers(data.items))
    dispatch(setToggleFetching(false))
}

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(setFollowingInProgress(userId, true))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setFollowingInProgress(userId, false))
}

export const unFollow = (userId: number) => async (dispatch: Dispatch) => {
    let apiMethod = userAPI.unfollow.bind(userAPI)
    let actionCreator = unFollowSuccess

    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
}
export const follow = (userId: number) => async (dispatch: Dispatch) => {
    let apiMethod = userAPI.follow.bind(userAPI)
    let actionCreator = followSuccess

    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
}


type usersActionType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setToggleFetching>
    | ReturnType<typeof setFollowingInProgress>
