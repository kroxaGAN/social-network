import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    let dialogsData=[
        {id:1,name:'Dima'},
        {id:2,name:'Andreu'},
        {id:3,name:'Valeiy'}
    ]
    let messagesData=[
        {id:1,message:'Helloooy'},
        {id:2, message:'it good'},
        {id:3, message:'very good'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <h3>Dialogs</h3>
                {
                    dialogsData.map((dialogs)=>{
                       return  <DialogItem key={dialogs.id} name={dialogs.name} id={dialogs.id}/>
                    })
                }
            </div>
            <div>
                <h3>Messages</h3>
                <div className={s.messages}>
                    {
                        messagesData.map((m)=>{
                            return<Message key={m.id} message={m.message}/>
                        })
                    }

                </div>
            </div>
        </div>
    )
}
