import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import React from "react";
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={profile.photos.large}/>
                </div>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
                <div>
                    <div>Name: {profile.fullName}</div>
                    <div>About me: {profile.aboutMe}</div>
                </div>
                <div>
                    <ul>
                        <li>Facebook: {profile.contacts.facebook}</li>
                        <li>Website: {profile.contacts.facebook}</li>
                        <li>VK: {profile.contacts.facebook}</li>
                        <li>Twitter: {profile.contacts.facebook}</li>
                        <li>Instagram: {profile.contacts.facebook}</li>
                        <li>YouTube: {profile.contacts.facebook}</li>
                        <li>GitHub: {profile.contactsfacebook}</li>
                    </ul>
                </div>
                { profile.lookingForAJob
                    ? <div>{profile.lookingForAJobDescription}</div> : undefined }
            </div>

        </div>
    )
}

export default ProfileInfo;