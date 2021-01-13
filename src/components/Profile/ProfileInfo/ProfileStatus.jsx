import s from "./ProfileStatus.module.css";
import React from "react";

class ProfileStatus extends React.Component{
    state = {
        editMode: false
    }

    activateEditMode = () => {
        debugger
        this.setState(
            {
                editMode: true
            }
        )
    }

    deActivateEditMode = () => {
        debugger
        this.setState(
            {
                editMode: false
            }
        )
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} >{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status}/>
                    </div>
                }
                <div>
                    <div>Name: {this.props.profile.fullName}</div>
                    <div>About me: {this.props.profile.aboutMe}</div>
                </div>
                <div>
                    <ul>
                        <li>Facebook: {this.props.profile.contacts.facebook}</li>
                        <li>Website: {this.props.profile.contacts.facebook}</li>
                        <li>VK: {this.props.profile.contacts.facebook}</li>
                        <li>Twitter: {this.props.profile.contacts.facebook}</li>
                        <li>Instagram: {this.props.profile.contacts.facebook}</li>
                        <li>YouTube: {this.props.profile.contacts.facebook}</li>
                        <li>GitHub: {this.props.profile.contactsfacebook}</li>
                    </ul>
                </div>
                { this.props.profile.lookingForAJob ? <div>{this.props.profile.lookingForAJobDescription}</div> : undefined }
            </>
        )
    }

}

export default ProfileStatus;