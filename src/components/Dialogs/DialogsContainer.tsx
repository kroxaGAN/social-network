import React from "react";
import {addMessageAC, addNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext/storeContext";

type DialogsPropsType = {
    // store:StoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const onAddNewMessageHandler = () => {
                        store.dispatch(addMessageAC())
                    }
                    const onAddNewMessage = (message: string) => {
                        store.dispatch(addNewMessageTextAC(message))
                    }
                    return (
                        <Dialogs
                            addNewMessage={onAddNewMessage}
                            addNewMessageHandler={onAddNewMessageHandler}
                            newDialogText={store.getState().dialogsPage.newDialogText}
                            dialogs={store.getState().dialogsPage.dialogs}
                            messages={store.getState().dialogsPage.messages}
                        />
                    )
                }
            }
        </StoreContext.Consumer>

    )
}
