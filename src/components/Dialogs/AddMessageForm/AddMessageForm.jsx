import {Field, reduxForm} from "redux-form";
import React from "react";

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

export default reduxForm({form: 'dialogueAddMessageForm'})(AddMessageForm)