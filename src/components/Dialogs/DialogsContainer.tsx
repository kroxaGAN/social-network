import React from "react";
import {addMessageAC, addMessageActionCreator, addNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppReducerType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {withRouter} from "react-router-dom";

type DialogsPropsType = {
    // store:StoreType
}

class DialogsContainer extends React.Component<any, any> {
    render() {
        // if (!this.props.isAuth){return <Redirect to={'/login'}/>}
        return (
            <div>
                <Dialogs {...this.props}
                         dialogs={this.props.dialogs}
                         isAuth={this.props.isAuth}
                         messages={this.props.messages}
                         newDialogText={this.props.newDialogText}
                         addMessageActionCreator={this.props.addMessageActionCreator}
                />
            </div>
        )

    }
}

// export const DialogsContainer = (props: DialogsPropsType) => {
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
//     )
// }

let AuthRedirectComponent = WithAuthRedirect(Dialogs)
// let _AuthRedirectComponent=(props:any)=>{
//     if (!props.isAuth){return <Redirect to={'/login'}/>}
//     return <Dialogs {...props}/>
// }

const mapStateToProps = (state: AppReducerType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newDialogText: state.dialogsPage.newDialogText,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        addNewMessageHandler: () => dispatch(addMessageAC()),
        addNewMessage: (message: string) => {
            dispatch(addNewMessageTextAC(message))
        },
        newMessageADD: (message: string) => {
            dispatch(addMessageActionCreator(message))
        }
    }
}


// export const DialogsContainer=connect (mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)

// export const DialogsContainer:any=compose(connect (mapStateToProps,mapDispatchToProps),WithAuthRedirect)(Dialogs)

let dialogContainer: any = compose(
    connect(mapStateToProps, {addMessageActionCreator}),
    withRouter,
    // WithAuthRedirect //временно коммент
)(DialogsContainer)
export default dialogContainer
