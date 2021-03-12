import React, {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateStatus?: (status: string) => void
}
type StateType= {
    status: string
    editMode: boolean
}

class ProfileStatus extends React.Component<PropsType, StateType>{
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        if (this.props.updateStatus) {
            this.props.updateStatus(this.state.status)
        }
    }

    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        console.log('component update')
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
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
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}/>
                    </div>
                }
            </>
        )
    }

}

export default ProfileStatus;