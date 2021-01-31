import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                isOwner={props.isOwner} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;