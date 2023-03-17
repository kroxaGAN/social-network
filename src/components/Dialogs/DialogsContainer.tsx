import React from "react";
import {addMessageAC, addNewMessageTextAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store:StoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {

    const onAddNewMessageHandler=()=>{
        props.store.dispatch(addMessageAC())
    }
    const onAddNewMessage=(message:string)=>{
            props.store.dispatch(addNewMessageTextAC(message))
    }
    return (
        <Dialogs
            addNewMessage={onAddNewMessage}
            addNewMessageHandler={onAddNewMessageHandler}
            newDialogText={props.store.getState().dialogsPage.newDialogText}
            dialogs={props.store.getState().dialogsPage.dialogs}
            messages={props.store.getState().dialogsPage.messages}
    />)
}
