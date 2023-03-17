
import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sideBarReducer} from "./sideBar-reducer";

let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sideBar:sideBarReducer
})

export type AppReducerType=ReturnType<typeof reducers>

export const store=createStore(reducers)

export type StoreType=typeof store


// @ts-ignore
window.store = store;
