
import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sideBarReducer} from "./sideBar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";
import {appReducer} from "./app-reducer";

let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sideBarReducer,
    usersFind:usersReducer,
    auth:authReducer,
    app:appReducer
})

export type AppReducerType=ReturnType<typeof reducers>

export const store=createStore(reducers, applyMiddleware(thunk))

export type StoreType=typeof store


// @ts-ignore
window.store = store;
