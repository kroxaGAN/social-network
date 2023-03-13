import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React from "react";
import {DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPageState: {
        dialogs: DialogType[],
        messages: MessageType[],
        newDialogText:string
    },
    addNewMessageText:(text:string)=>void,
    addMessage:()=>void
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
        props.addMessage()
    }
    const addNewMessage=()=>{
        let message=newMessageTextarea.current?.value
        if (message){
            props.addNewMessageText(message)
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
