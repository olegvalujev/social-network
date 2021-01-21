import s from "./ProfileStatus.module.css";
import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = ({status, updateStatus}) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(status)

    useEffect(() => {
        setStatus(status)
    }, [status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(status)
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }
    return (
        <>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode} >{ status } </span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
                       onChange={onStatusChange}
                       onBlur={deactivateEditMode}
                       value={status}
                />
            </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;