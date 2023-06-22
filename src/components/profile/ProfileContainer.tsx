import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhotos, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {AppReducerType} from "../../redux/redux-store";
import {compose} from "redux";

type ProfileContainerPropsType = {}

class ProfileContainer extends React.Component<any, any> {
     refreshProfile(){
         let userId = this.props.match.params.userId
         if (userId === undefined) {
             userId = this.props.authorizedUserId
             if (!userId){
                 this.props.history.push('/login')
             }
         }
         this.props.getUserProfile(userId)
         this.props.getUserStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        //     userAPI.profile(userId)
        //     .then((res)=>{
        //         this.props.setUserProfileAC(res.data)
        //     })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
         if(this.props.match.params.userId!==prevProps.match.params.userId){
             this.refreshProfile()
         }
    }

    render() {
        // if (!this.props.isAuth){return <Redirect to={'/login'}/>}
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    isOwner={!this.props.match.params.userId}
                    isAuth={this.props.isAuth}
                    updateUserStatus={this.props.updateUserStatus}
                    savePhotos={this.props.savePhotos}
                />
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
        status:state.profilePage.status,
        isAuth:state.auth.isAuth,
        authorizedUserId:state.auth.id
    }
}

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

let profileContainer:any= compose(
    connect(mapStateToProps, {getUserProfile,
        getUserStatus,updateUserStatus,savePhotos}),
    withRouter,
    // WithAuthRedirect //временно коммент
)(ProfileContainer)
export default profileContainer
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)

