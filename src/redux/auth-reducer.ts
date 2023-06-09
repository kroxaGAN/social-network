import {ActionType} from "./store";

const initialAuthState = {
    id: 10000,
    login: "null",
    email: "null",
    isAuth:false
}
export type initialAuthStateType = {
    id: number ,
    login: string,
    email: string,
    isAuth:boolean
}

export const authReducer = (state: initialAuthStateType = initialAuthState, action: ActionType) => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        }
        default:
            return state
    }
}

export const setAuthUserDataAC = ( id: number ,login: string,email: string) => {
    return {
        type: "SET-USER-DATA",
        data:{id,login,email}
    } as const
}

