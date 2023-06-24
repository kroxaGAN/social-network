import React, {ChangeEvent, useEffect, useState} from "react";


type PropsType = {
    status: string,
    updateUserStatus: (status:string) => void
}

export const ProfileStatusWithHooks = (props: PropsType) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const EditModeSwitch=(value:boolean)=>{
        setEditMode(value)
        if (!value){
            props.updateUserStatus(status)
        }
    }
    const onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setStatus(e.currentTarget.value)
    }

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    return <>
        <div>
            {
                editMode
                    ? <input onChange={onStatusChange}
                             onBlur={()=>EditModeSwitch(false)}
                             autoFocus
                             value={status}/>
                    : <div>
                        <span onDoubleClick={()=>EditModeSwitch(true)}>

                            <div>
                                <b>Status</b>:  {status || " No status"}
                            </div>


                             </span>
                    </div>

            }
        </div>

    </>
}
