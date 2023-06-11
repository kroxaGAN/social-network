import React from "react";
import {addMessageAC, addNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppReducerType} from "../../redux/redux-store";

type DialogsPropsType = {
    // store:StoreType
}

// export const DialogsContainer = (props: DialogsPropsType) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const onAddNewMessageHandler = () => {
//                         store.dispatch(addMessageAC())
//                     }
//                     const onAddNewMessage = (message: string) => {
//                         store.dispatch(addNewMessageTextAC(message))
//                     }
//                     return (
//                         <Dialogs
//                             addNewMessage={onAddNewMessage}
//                             addNewMessageHandler={onAddNewMessageHandler}
//                             newDialogText={store.getState().dialogsPage.newDialogText}
//                             dialogs={store.getState().dialogsPage.dialogs}
//                             messages={store.getState().dialogsPage.messages}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//
//     )
// }

const mapStateToProps=(state:AppReducerType)=>{
    return {
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages,
        newDialogText:state.dialogsPage.newDialogText,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps=(dispatch:Dispatch)=>{

    return {
        addNewMessageHandler: ()=>dispatch(addMessageAC()),
        addNewMessage:(message:string)=>{dispatch(addNewMessageTextAC(message))}
    }
}

export const DialogsContainer=connect (mapStateToProps,mapDispatchToProps)(Dialogs)
