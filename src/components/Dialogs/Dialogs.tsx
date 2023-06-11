import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React from "react";
import { DialogType, MessageType} from "../../redux/store";
import {Redirect} from "react-router-dom";

type DialogsPropsType = {
    addNewMessage:(text:string)=>void,
    addNewMessageHandler:()=>void,
    newDialogText:string,
    dialogs:DialogType[],
    messages:MessageType[],
    isAuth:boolean
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElement = props.dialogs.map((d) =>
        <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>
    )
    let messagesElement = props.messages.map((m) =>
        <Message key={m.id} message={m.message}/>
    )
    let newMessageTextarea=React.createRef<HTMLTextAreaElement>()
    const addNewMessageHandler=()=>{
        props.addNewMessageHandler()
    }
    const addNewMessage=()=>{
        let message=newMessageTextarea.current?.value
        if (message){
            props.addNewMessage(message)
        }
    }
    if (!props.isAuth){
        return  <Redirect to={"/login"}/>
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
                            value={props.newDialogText}
                            onChange={addNewMessage}
                        />
                    </div>
                    <button onClick={addNewMessageHandler}>Add message</button>
                </div>
            </div>
        </div>
    )
}
