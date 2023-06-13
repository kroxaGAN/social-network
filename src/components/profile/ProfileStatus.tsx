import React from "react";


class ProfileStatus extends React.Component<any, any> {
    state={
        editMode:false
    }

    activateEditMode=()=>{

        this.setState({
            editMode:true
        })
    }
    deactivateEditMode=()=>{
        this.setState({
            editMode:false
        })
    }

    render() {
        return <>
            <div>
                {
                    this.state.editMode
                        ?<input onBlur={this.deactivateEditMode} autoFocus value={'привет'}/>
                        :<span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                }
            </div>

        </>
    }
}
export default ProfileStatus
