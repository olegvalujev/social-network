import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import React from "react";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2018/01/04/14/11/viburnum-3060769_1280.jpg" alt="viburum"/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large}/>
                </div>
                <div>
                    <div>Name: {props.profile.fullName}</div>
                    <div>About me: {props.profile.aboutMe}</div>
                </div>
                <div>
                    <ul>
                        <li>Facebook: {props.profile.contacts.facebook}</li>
                        <li>Website: {props.profile.contacts.facebook}</li>
                        <li>VK: {props.profile.contacts.facebook}</li>
                        <li>Twitter: {props.profile.contacts.facebook}</li>
                        <li>Instagram: {props.profile.contacts.facebook}</li>
                        <li>YouTube: {props.profile.contacts.facebook}</li>
                        <li>GitHub: {props.profile.contactsfacebook}</li>
                    </ul>
                </div>
                { props.profile.lookingForAJob
                    ? <div>{props.profile.lookingForAJobDescription}</div> : undefined }
            </div>

        </div>
    )
}

export default ProfileInfo;