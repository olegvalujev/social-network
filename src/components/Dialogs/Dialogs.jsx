import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";

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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    let {handleSubmit} = props
    return(
        <form onSubmit={handleSubmit}>
        <div>
            <Field
                component={'textarea'}
                name={'newMessageBody'}
                placeholder={'Enter your message'}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogueAddMessageForm'})(AddMessageForm)

export default Dialogs