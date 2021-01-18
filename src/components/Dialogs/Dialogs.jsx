import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";
import AddMessageForm from './AddMessageForm/AddMessageForm'

import React from "react";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { props.dialogsPage.dialogs.map(d => (<DialogItem id={d.id} key={d.id} name={d.name}/>)) }
            </div>
            <div className={s.messages}>
                <div>
                    { props.dialogsPage.messages.map(m => (<Message id={m.id} key={m.id} message={m.message}/>)) }
                </div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

export default Dialogs