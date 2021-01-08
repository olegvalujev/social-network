import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";

import React from "react";

const Dialogs = (props) => {
    let onSendMessage = () => {
        props.addPost()
    }

    let onDialogMessageChange = (event) => {
        let text = event.target.value
        props.updateMessage(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { props.dialogsPage.dialogs.map(d => (<DialogItem id={d.id} key={d.id} name={d.name}/>)) }
            </div>
            <div className={s.messages}>
                <div>
                    { props.dialogsPage.messages.map(m => (<Message id={m.id} key={m.id} message={m.message}/>)) }
                </div>
                <div>
                    <textarea onChange={onDialogMessageChange} value={props.dialogsPage.newMessageText}/>
                    <button onClick={onSendMessage}>Add post</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs