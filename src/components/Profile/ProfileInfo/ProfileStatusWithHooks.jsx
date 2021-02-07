import React, {useEffect, useState} from "react";
import styled, {css} from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    
    ${props =>
        props.primary &&
        css`
          background: palevioletred;
          color: white;
        `};
`

const ProfileStatusWithHooks = ({status: initialStatus, updateStatus}) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(initialStatus)

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
                <strong>Status:</strong> <span onDoubleClick={activateEditMode} >{ status } </span>
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
            <Button primary>Primary button</Button>
        </>
    )
}

export default ProfileStatusWithHooks;