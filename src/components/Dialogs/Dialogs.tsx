import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React from "react";

export type DialogType = {
    id: number, name: string, avatar:string
}
export type MessageType = {
    id: number, message: string
}

type DialogsPropsType = {
    state: {
        dialogs: DialogType[],
        messages: MessageType[]
    }
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElement = props.state.dialogs.map((d) =>
        <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>
    )
    let messagesElement = props.state.messages.map((m) =>
        <Message key={m.id} message={m.message}/>
    )
    let newMessageTextarea=React.createRef<HTMLTextAreaElement>()
    const addNewMessageHandler=()=>{
        let message=newMessageTextarea.current?.value
        alert(message)
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
                        >new message</textarea>
                    </div>
                    <button onClick={addNewMessageHandler}>Add message</button>
                </div>
            </div>
        </div>
    )
}
