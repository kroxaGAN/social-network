import {ActionType} from "./store";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";

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
export type AuthDataType={
    email: string,
    password:string,
    rememberMe:boolean
}

export const authReducer = (state: initialAuthStateType = initialAuthState, action: ActionType) => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.data,
            }
        }
        case "DELETE-LOGOUT":{
            return {...state,...initialAuthState}
        }
        default:
            return state
    }
}

export const setAuthUserDataAC = ( id: number ,login: string,email: string,isAuth:boolean) => {
    return {
        type: "SET-USER-DATA",
        data:{id,login,email,isAuth}
    } as const
}
export const deleteLogout=()=>{
    return{
        type:"DELETE-LOGOUT"
    }as const
}

export const getAuthUserData=()=>(dispatch:Dispatch)=>{
    authAPI.me()
        .then((res)=>{
            if(res.data.resultCode===0){
                let {id, login, email}=res.data.data
                dispatch(setAuthUserDataAC(id, login, email,true))
            }
        })
}
export const authLogin=(data:AuthDataType,setStatus:any)=>(dispatch:Dispatch)=>{
    authAPI.login(data)
        .then((res)=>{
            if(res.data.resultCode===0){
                // dispatch(getAuthUserData()) не работает!!!!потому и ниже
                authAPI.me()
                    .then((res)=>{
                        if(res.data.resultCode===0){
                            let {id, login, email}=res.data.data
                            dispatch(setAuthUserDataAC(id, login, email,true))
                        }
                    })
            }else {
                setStatus({error: res.data.messages})
            }
        })
}
export const logOut=()=>(dispatch:Dispatch)=>{
    authAPI.logout()
        .then((res)=>{
            if(res.data.resultCode===0){
                dispatch(deleteLogout())
            }
        })
}
