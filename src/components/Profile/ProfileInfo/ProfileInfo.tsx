import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import React, {ChangeEvent, useState} from "react";
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import defaultAvatar from "../../../assets/snowman_medium.png";
import ProfileDetailsForm from "./ProfileDetailsForm";
import {ContactType, ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}
const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            savePhoto(event.target.files[0]);
        }
    }

    const onSubmit = async (formData: ProfileType) => {
        // todo: remove then
        saveProfile(formData).then(() => {
            setEditMode(false)
        }).catch(() => {
        })

    }
    return (
        <div className={styles.descriptionBlock}>
            <div>
                <img src={profile.photos.large !== null ? profile.photos.large : defaultAvatar}
                     className={styles.avatar} alt={'Profile'}/>
            </div>
            {isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
            <ProfileStatusWithHooks
                status={status}
                updateStatus={updateStatus}
            />
            {editMode
                ? <ProfileDetailsForm profile={profile}
                                      initialValues={profile}
                                      onSubmit={onSubmit}
                />
                : <ProfileDetails profile={profile}
                                  isOwner={isOwner}
                                  goToEditMode={() => {
                                      setEditMode(true)
                                  }}
                />}

        </div>
    )
}

type ProfileDataProps = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileDetails: React.FC<ProfileDataProps> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit Mode</button>
        </div>}
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
                {Object.keys(profile.contacts).map((key: string) => {
                    return <Contact key={key} contactTitle={key}
                                    contactValue={profile.contacts[key as keyof ContactType]}/>
                })}
            </div>
        </div>
    </div>
}
type ContactPropsType = {
    contactTitle: string
    contactValue: string
}
const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileInfo;