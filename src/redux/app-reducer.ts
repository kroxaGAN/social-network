import {ActionType} from "./store";
import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

const initialAppState = {
    initialized: false
}
type initialAppStateType = {
    initialized: boolean
}

export const appReducer = (state: initialAppStateType = initialAppState, action: ActionType) => {
    switch (action.type) {
        case "SET-INITIALIZED": {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export const initializedSuccess = () => {
    return {
        type: "SET-INITIALIZED"
    } as const
}

export const initializeApp = () => (dispatch: Dispatch) => {
    dispatch<any>(getAuthUserData())
        .then(()=>{
            dispatch(initializedSuccess())
        })
}
