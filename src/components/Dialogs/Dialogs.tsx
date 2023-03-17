import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React from "react";
import {ActionType, DialogType, MessageType} from "../../redux/store";
import {addMessageAC, addNewMessageTextAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";

type DialogsPropsType = {
    store:StoreType
    dialogsPageState: {
        dialogs: DialogType[],
        messages: MessageType[],
        newDialogText:string
    },
    // addNewMessageText:(text:string)=>void,
    // addMessage:()=>void,
    dispatch:(action:ActionType)=>void
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElement = props.dialogsPageState.dialogs.map((d) =>
        <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>
    )
    let messagesElement = props.dialogsPageState.messages.map((m) =>
        <Message key={m.id} message={m.message}/>
    )
    let newMessageTextarea=React.createRef<HTMLTextAreaElement>()
    const addNewMessageHandler=()=>{
        // let message=newMessageTextarea.current?.value
        // alert(message)
        // props.addMessage()
        // props.dispatch({type:"ADD-MESSAGE", text:message})
        props.dispatch(addMessageAC())
    }
    const addNewMessage=()=>{
        let message=newMessageTextarea.current?.value
        if (message){
            // props.addNewMessageText(message)
            // props.dispatch({type:"ADD-NEW-MESSAGE-TEXT",text:message})
            props.dispatch(addNewMessageTextAC(message))
        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <h3>Dialogs</h3>
                {dialogsElement}
            </div>
            <div>
                <h3>Messages</h3>
                <div className={s.messages}>
                    {messagesElement}
                    <div>
                        <textarea
                            ref={newMessageTextarea}
                            value={props.dialogsPageState.newDialogText}
                            onChange={addNewMessage}
                        />
                    </div>
                    <button onClick={addNewMessageHandler}>Add message</button>
                </div>
            </div>
        </div>
    )
}
