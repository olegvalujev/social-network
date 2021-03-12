import { InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {createField, Textarea} from "../../common/FormsControls/FormsControls";
import {maxLength, required} from "../../../utils/validators/validators";
import {NewMessageFormValuesType} from "../Dialogs";
const maxLength20 = maxLength(20)

type NewMessageFormTypeKeys = Extract<keyof NewMessageFormValuesType, string>
type OwnPropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, OwnPropsType> & OwnPropsType> = (props) => {
    let {handleSubmit} = props
    return(
        <form onSubmit={handleSubmit}>
            <div>
                {createField<NewMessageFormTypeKeys>('Enter your message', 'newMessageBody', [required, maxLength20], Textarea)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm<NewMessageFormValuesType>({form: 'dialog-add-message-form'})(AddMessageForm)