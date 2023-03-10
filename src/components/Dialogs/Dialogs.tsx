import s from './Dialogs.module.css'

export const Dialogs=()=>{
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <h3>Dialogs</h3>
                <div className={`${s.dialog} ${s.active}`}>Dima</div>
                <div className={s.dialog}>Andreu</div>
                <div className={s.dialog}>Dina</div>
                <div className={s.dialog}>Valeiy</div>
            </div>
            <div>
               <h3>Messages</h3>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>it good</div>
                    <div className={s.message}>wery good</div>
                </div>
            </div>
        </div>
    )
}
