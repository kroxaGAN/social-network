import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/store";
import {withRouter} from "react-router-dom";
import {userAPI} from "../../api/api";

type ProfileContainerPropsType={

}

class ProfileContainer extends React.Component<any, any>{
    componentDidMount() {
        let userId=this.props.match.params.userId
        if(userId===undefined){
            userId=2
        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            userAPI.profile(userId)
            .then((res)=>{
                this.props.setUserProfileAC(res.data)
            })
    }

    render(){
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )

    }
}

let mapStateToProps=(state:RootStateType)=>{
return {profile:state.profilePage.profile}
}


let WithUrlDataContainerComponent= withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfileAC}) (WithUrlDataContainerComponent)
