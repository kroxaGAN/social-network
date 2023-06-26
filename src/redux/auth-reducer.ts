import {ActionType} from "./store";
import {authAPI, securityAPI} from "../api/api";
import {Dispatch} from "redux";

const initialAuthState = {
    id: null,
    login: "null",
    email: "null",
    isAuth: false,
    captcha:null
}
export type initialAuthStateType = {
    id: number | null,
    login: string,
    email: string,
    isAuth: boolean,
    captcha: string | null
}
export type AuthDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: string | null
}

export const authReducer = (state: initialAuthStateType = initialAuthState, action: ActionType) => {
    switch (action.type) {
        case "SAMURAI-NETWORK/AUTH/SET-USER-DATA": {
            return {
                ...state,
                ...action.data,
            }
        }
        case "SAMURAI-NETWORK/AUTH/DELETE-LOGOUT": {
            return {...state, ...initialAuthState}
        }
        case "SAMURAI-NETWORK/AUTH/GET-CAPTCHA-URL-SUCCESS":{
            return {
                ...state, captcha:action.url
            }
        }
        default:
            return state
    }
}

export const setAuthUserDataAC = (id: number, login: string, email: string, isAuth: boolean) => {
    return {
        type: "SAMURAI-NETWORK/AUTH/SET-USER-DATA",
        data: {id, login, email, isAuth}
    } as const
}
export const deleteLogout = () => {
    return {
        type: "SAMURAI-NETWORK/AUTH/DELETE-LOGOUT"
    } as const
}
export const getCaptchaUrlSuccess=(url:string)=>{
    return{
        type:"SAMURAI-NETWORK/AUTH/GET-CAPTCHA-URL-SUCCESS",url
    }as const
}


// export const getAuthUserData=()=>(dispatch:Dispatch)=>{
//    return authAPI.me()
//         .then((res)=>{
//             if(res.data.resultCode===0){
//                 let {id, login, email}=res.data.data
//                 dispatch(setAuthUserDataAC(id, login, email,true))
//             }
//         })
// }

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const res = await authAPI.me()
    if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(setAuthUserDataAC(id, login, email, true))
    }
}

// export const authLogin = (data: AuthDataType, setStatus: any) => (dispatch: Dispatch) => {
//     authAPI.login(data)
//         .then((res) => {
//             if (res.data.resultCode === 0) {
//                 // dispatch(getAuthUserData()) не работает!!!!потому и ниже
//                 authAPI.me()
//                     .then((res) => {
//                         if (res.data.resultCode === 0) {
//                             let {id, login, email} = res.data.data
//                             dispatch(setAuthUserDataAC(id, login, email, true))
//                         }
//                     })
//             } else {
//                 setStatus({error: res.data.messages})
//             }
//         })
// }

export const authLogin = (data: AuthDataType, setStatus: any) => async (dispatch: Dispatch) => {
    const res = await authAPI.login(data)
    if (res.data.resultCode === 0) {
        // dispatch(getAuthUserData()) не работает!!!!потому и ниже
        authAPI.me()
            .then((res) => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data
                    dispatch(setAuthUserDataAC(id, login, email, true))
                }
            })
    } else {
        if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        setStatus({error: res.data.messages})
    }
}

export const getCaptchaUrl:any=()=>async (dispatch:Dispatch)=>{
    const result= await securityAPI.getCaptchaUrl()
    const captcha=result.data.url
    dispatch(getCaptchaUrlSuccess(captcha))
}

// export const logOut = () => (dispatch: Dispatch) => {
//     authAPI.logout()
//         .then((res) => {
//             if (res.data.resultCode === 0) {
//                 dispatch(deleteLogout())
//             }
//         })
// }
export const logOut = () => async (dispatch: Dispatch) => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(deleteLogout())
    }
}
