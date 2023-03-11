import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    let dialogsData=[
        {id:1,name:'Dima'},
        {id:2,name:'Andreu'},
        {id:3,name:'Valeiy'}
    ]

    let dialogsElement=dialogsData.map((dialogs)=>
        <DialogItem key={dialogs.id} name={dialogs.name} id={dialogs.id}/>
    )

    let messagesData=[
        {id:1,message:'Helloooy'},
        {id:2, message:'it good'},
        {id:3, message:'very good'},
    ]

    let messagesElement=messagesData.map((m)=>
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
