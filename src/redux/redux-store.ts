
import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sideBarReducer} from "./sideBar-reducer";

let reducers=combineReducers({
    profile:profileReducer,
    dialogs:dialogsReducer,
    sideBar:sideBarReducer
})

export const AppReducerType=typeof reducers

export const store=createStore<any, any, any, any>(reducers)
