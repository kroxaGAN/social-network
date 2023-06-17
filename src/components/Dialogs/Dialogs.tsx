import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React from "react";
import { DialogType, MessageType} from "../../redux/store";
import {Redirect} from "react-router-dom";
import {useFormik} from "formik";

type DialogsPropsType = {
    addNewMessage:(text:string)=>void,
    newMessageADD:(text:string)=>void,
    addNewMessageHandler:()=>void,
    newDialogText:string,
    dialogs:DialogType[],
    messages:MessageType[],
    isAuth:boolean
}
type FormikErrorType = {
    inputText?: string
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElement = props.dialogs.map((d) =>
        <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>
    )
    let messagesElement = props.messages.map((m) =>
        <Message key={m.id} message={m.message}/>
    )
    // let newMessageTextarea=React.createRef<HTMLTextAreaElement>()


    if (!props.isAuth){
        return  <Redirect to={"/login"}/>
    }
    const putNewMessage=(message:string)=>{
        props.newMessageADD(message)

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
                    {/*<div>*/}
                    {/*    <textarea*/}
                    {/*        ref={newMessageTextarea}*/}
                    {/*        value={props.newDialogText}*/}
                    {/*        onChange={addNewMessage}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<button onClick={addNewMessageHandler}>Add message</button>*/}
                    <AddMessageForm putNewMessage={putNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const AddMessageForm=(props:{putNewMessage:(message:string)=>void})=>{
    const formik = useFormik({
        initialValues: {
            inputText: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.inputText) {
                errors.inputText = 'Required';
            } else if (values.inputText.length >10 ) {
                errors.inputText = 'Must be 10 characters or less';
            }
            return errors
        },
        onSubmit: values => {
            props.putNewMessage(values.inputText)
           formik.resetForm()
        },
    });
    return(
        <form onSubmit={formik.handleSubmit}>
            <h3>Input message</h3>
            <div>
                <input
                    name="inputText"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.inputText}
                />
                {formik.errors.inputText &&  formik.touched.inputText  && <div style={{color:'red'}}>{formik.errors.inputText}</div>}
            </div>
            <div>
                <button
                    type="submit"
                    disabled={Object.keys(formik.errors).length !== 0}
                >Add message</button>
            </div>
        </form>
    )
}
