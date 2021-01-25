import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import React from "react";
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import defaultAvatar from "../../../assets/snowman_medium.png";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile){
        return <Preloader/>
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <div>
                    <img src={profile.photos.large !== null ? profile.photos.large : defaultAvatar} className={styles.avatar}/>
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
                        {profile.contacts.facebook && <li>Facebook: {profile.contacts.facebook}</li>}
                        {profile.contacts.website && <li>Website: {profile.contacts.website}</li>}
                        {profile.contacts.vk && <li>VK: {profile.contacts.vk}</li>}
                        {profile.contacts.twitter && <li>Twitter: {profile.contacts.twitter}</li>}
                        {profile.contacts.instagram && <li>Instagram: {profile.contacts.instagram}</li>}
                        {profile.contacts.youtube && <li>YouTube: {profile.contacts.youtube}</li>}
                        {profile.contacts.github && <li>GitHub: {profile.contacts.github}</li>}
                    </ul>
                </div>
                { profile.lookingForAJob
                    ? <div>{profile.lookingForAJobDescription}</div> : undefined }
            </div>

        </div>
    )
}

export default ProfileInfo;