import React, {ChangeEvent, useEffect, useState} from "react";
import styled, {css} from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    
    ${(props: StyledButtonType) =>
        props.primary &&
        css`
          background: palevioletred;
          color: white;
        `};
`
type StyledButtonType = {
    primary: boolean
}

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}
const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(status)
    }, [status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
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