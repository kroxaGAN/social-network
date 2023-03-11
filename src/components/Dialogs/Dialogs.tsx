import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export type DialogType = {
    id: number, name: string
}
export type MessageType = {
    id: number, message: string
}

type DialogsPropsType = {
    dialogs: DialogType[],
    messages: MessageType[]
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElement = props.dialogs.map((d) =>
        <DialogItem key={d.id} name={d.name} id={d.id}/>
    )


    let messagesElement = props.messages.map((m) =>
        <Message key={m.id} message={m.message}/>
    )

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
                </div>
            </div>
        </div>
    )
}
