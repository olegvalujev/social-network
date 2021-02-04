import React from 'react'
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";

const ProfileDetailsForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        <div>
            <div>
                <b>Full name:</b>{createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b>Looking for a job:</b>{createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                <b>My professional skills:</b>{createField('My professional skills', 'lookingForJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me:</b>{createField('About me', 'aboutMe', [], Textarea)}
            </div>
        </div>
    </form>
}

export default reduxForm({form: 'profile-details-edit-form'})(ProfileDetailsForm)