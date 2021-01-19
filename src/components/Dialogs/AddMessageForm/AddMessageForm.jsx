import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLength, required} from "../../../utils/validators/validators";
const maxLength20 = maxLength(20)
const AddMessageForm = (props) => {
    let {handleSubmit} = props
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required, maxLength20]}
                    name={'newMessageBody'}
                    placeholder={'Enter your message'}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialogue-add-message-form'})(AddMessageForm)