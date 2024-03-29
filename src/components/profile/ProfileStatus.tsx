import React, {ChangeEvent} from "react";


class ProfileStatus extends React.Component<any, any> {
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
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

        componentDidUpdate (prevProps:any,prevState:any) {
            console.log("componentDidUpdate")
            if (this.props.status!==prevProps.status){
                this.setState({
                    status: this.props.status
                })
            }
        }

    render() {
        console.log("render")
        return <>
            <div>
                {
                    this.state.editMode
                        ? <input onChange={this.onStatusChange}
                                 onBlur={this.deactivateEditMode}
                                 autoFocus
                                 value={this.state.status}/>
                        : <div>{`Статус: `}
                            <span onDoubleClick={this.activateEditMode}>

                            { this.state.status || " No status"}

                            </span>
                    </div>

                }
            </div>

        </>
    }
}

export default ProfileStatus
