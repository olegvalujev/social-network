import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import React, {useEffect, useState} from "react";
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import defaultAvatar from "../../../assets/snowman_medium.png";
import ProfileDetailsForm from "./ProfileDetailsForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length > 0) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
    }
    return (
        <div className={styles.descriptionBlock}>
            <div>
                <img src={profile.photos.large !== null ? profile.photos.large : defaultAvatar}
                     className={styles.avatar}/>
            </div>
            {isOwner && <input type={'file'} onChange={mainPhotoSelected}/> }
            <ProfileStatusWithHooks
                status={status}
                updateStatus={updateStatus}
            />
            {editMode
                ? <ProfileDetailsForm profile={profile} onSubmit={onSubmit}/>
                : <ProfileDetails profile={profile}
                                  isOwner={isOwner}
                                  goToEditMode={() => {setEditMode(true)}}
                />}

        </div>
    )
}

const ProfileDetails = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>Edit Mode</button></div>}
        <div>
            <div>
                <b>Full name:</b> {profile.fullName ? profile.fullName : ' - '}
            </div>
            <div>
                <b>Looking for job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJobDescription && <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me:</b> {profile.aboutMe ? profile.aboutMe : ' - '}
            </div>
        </div>
        <div>
            <b>Contacts:</b>
            <div className={styles.contacts}>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
            </div>
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileInfo;