import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";

import AddMessageForm from './AddMessageForm/AddMessageForm'
import {Redirect} from "react-router-dom";
import {InitialStateType} from "../../redux/dialogs-reducer";

type OwnPropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}

export type NewMessageFormValuesType = {
    newMessageBody: string
}

const Dialogs: React.FC<OwnPropsType> = (props) => {

    const addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { props.dialogsPage.dialogs.map(d => (<DialogItem id={d.id} key={d.id} name={d.name}/>)) }
            </div>
            <div className={s.messages}>

                    { props.dialogsPage.messages.map(m => (<Message key={m.id} message={m.message}/>)) }

                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

export default Dialogs
