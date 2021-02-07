import React from 'react'
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import styles from "./ProfileInfo.module.css";

const ProfileDetailsForm = ({handleSubmit, initialValues, profile, error}) => {
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
                <b>My professional skills:</b>{createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me:</b>{createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>Contacts:</b>
                <div className={styles.contacts}>
                    {Object.keys(profile.contacts).map(key => {
                        return <div className={styles.contact} key={key}>
                                <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                        </div>
                    })}
                </div>
            </div>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
        </div>
    </form>
}

export default reduxForm({form: 'profile-details-edit-form'})(ProfileDetailsForm)