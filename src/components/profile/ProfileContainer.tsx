import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {AppReducerType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

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
        // if (!this.props.isAuth){return <Redirect to={'/login'}/>}
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )

    }
}

// let AuthRedirectComponent=WithAuthRedirect(ProfileContainer)
// let _AuthRedirectComponent=(props:any)=>{
//     if (!props.isAuth){return <Redirect to={'/login'}/>}
//     return <ProfileContainer {...props}/>
// }


// let mapStateToPropsForRedirect = (state: AppReducerType) => {
//     return {
//         isAuth:state.auth.isAuth
//     }
// }
// let AuthRedirectComponentWithIsAuth=connect(mapStateToPropsForRedirect,{})(AuthRedirectComponent)


let mapStateToProps = (state: AppReducerType) => {
    return {
        profile: state.profilePage.profile,
    }
}

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

let profileContainer:any= compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
export default profileContainer
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)

