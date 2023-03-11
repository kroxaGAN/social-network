import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <h3>Dialogs</h3>
                <DialogItem name={'Dima'} id={1}/>
                <DialogItem name={'Andreu'} id={2}/>
                <DialogItem name={'Valeiy'} id={3}/>
            </div>
            <div>
                <h3>Messages</h3>
                <div className={s.messages}>
                    <Message message={'Helloooy'}/>
                    <Message message={'it good'}/>
                    <Message message={'wery good'}/>
                </div>
            </div>
        </div>
    )
}
