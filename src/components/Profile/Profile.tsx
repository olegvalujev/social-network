import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from './Profile.module.css'
import React, {useEffect} from "react";
import {ProfileType} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {useParams, useHistory, Redirect} from "react-router-dom";
import {
    getUserProfile as getUserProfileThunk,
    getStatus as getStatusThunk,
    updateStatus as updateStatusThunk,
    savePhoto as savePhotoThunk,
    saveProfile as saveProfileThunk
} from "../../redux/profile-reducer";

type PathParamType = {
    userId: string
}

export const Profile: React.FC = (props) => {

    const profile = useSelector((state: AppStateType) => state.profilePage.profile)
    const status = useSelector((state: AppStateType) => state.profilePage.status)
    const authorizedUserId = useSelector((state: AppStateType) => state.auth.userId)
    const {userId: userIdRouteParam} = useParams<PathParamType>()
    let history = useHistory()
    const dispatch = useDispatch()

    const getUserProfile = (userId: number) => {
        dispatch(getUserProfileThunk(userId))
    }
    const getStatus = (userId: number) => {
        dispatch(getStatusThunk(userId))
    }
    const updateStatus = (status: string) => {
        dispatch(updateStatusThunk(status))
    }
    const savePhoto = (file: File) => {
        dispatch(savePhotoThunk(file))
    }
    const saveProfile = async (profile: ProfileType) => {
        return dispatch(saveProfileThunk(profile));
    }
    const refreshProfile = () => {
        let userId: number | null = +userIdRouteParam
        console.log(userId, userIdRouteParam,authorizedUserId)
        if (!userId) {
            console.log('user is null')
            userId = authorizedUserId
            if (!userId) {
                // todo: may be repaced with redirect
                history.push('/login')
            }
        }
        if (!userId) { console.log('no user id')}
        else {
            getUserProfile(userId)
            getStatus(userId)
        }
    }

    useEffect(() => {
        refreshProfile()
    }, [authorizedUserId])

    return (
        <div className={styles.profile}>
            <ProfileInfo
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                savePhoto={savePhoto}
                isOwner={!userIdRouteParam}
                saveProfile={saveProfile}
            />
            <MyPostsContainer />
        </div>
    )
}