import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {RootStateType} from "../../redux/store";
import {Redirect, withRouter} from "react-router-dom";
import {AppReducerType} from "../../redux/redux-store";

type ProfileContainerPropsType = {}

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (userId === undefined) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        //     userAPI.profile(userId)
        //     .then((res)=>{
        //         this.props.setUserProfileAC(res.data)
        //     })
    }


    render() {
        if (!this.props.isAuth){return <Redirect to={'/login'}/>}
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )

    }
}

let mapStateToProps = (state: AppReducerType) => {
    return {
        profile: state.profilePage.profile,
        isAuth:state.auth.isAuth
    }
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
