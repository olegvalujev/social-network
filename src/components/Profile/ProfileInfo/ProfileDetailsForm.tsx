import React from 'react'
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input, Textarea} from "../../common/FormsControls/FormsControls";
import styles from "./ProfileInfo.module.css";
import {ProfileType} from "../../../types/types";

type ProfileDetailsProps = {
    profile: ProfileType
}

export type ProfileDetailsFormValuesType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

type ProfileTypeKeys = GetStringKeys<ProfileDetailsFormValuesType>
const ProfileDetailsForm: React.FC<InjectedFormProps<ProfileType, ProfileDetailsProps> & ProfileDetailsProps> = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        <div>
            <div>
                <b>Full name:</b>{createField<ProfileTypeKeys>('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b>Looking for a job:</b>{createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                <b>My professional skills:</b>{createField<ProfileTypeKeys>('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me:</b>{createField<ProfileTypeKeys>('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>Contacts:</b>
                <div className={styles.contacts}>
                    {Object.keys(profile.contacts).map(key => {
                        return <div className={styles.contact} key={key}>
                                {/*todo: create a solution for embedded objects*/}
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

export default reduxForm<ProfileType, ProfileDetailsProps>({form: 'profile-details-edit-form'})(ProfileDetailsForm)